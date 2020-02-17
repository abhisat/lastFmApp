import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDebounce } from "./utils/DebounceHook";
import { useUpdateEffect } from "./utils/UseUpdateEffect";
import { FlickrApp } from "./components/FlickrApp";
import { Response, ResponseItem } from "./types/ResponseTypes";

const App: React.FunctionComponent = () => {
  const [tags, setTags] = useState<string>();
  const [feeds, setFeeds] = useState<Response>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentFeed, setCurrentFeed] = useState<ResponseItem>();
  const [activePage, setActivePage] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [feedPage, setFeedPage] = useState<Array<ResponseItem>>();
  const [currentFeedId, setCurrentFeedId] = useState<number>();
  const itemsPerPage = 10;

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    setTags(input);
  };

  const handleFeedClick = (currentFeedId: number) => {
    if (feedPage && activePage) {
      setCurrentFeedId(currentFeedId);
      setCurrentFeed(feedPage[currentFeedId]);
    }
  };

  const handleBackButtonClick = () => {
    setCurrentFeedId(undefined);
    setCurrentFeed(undefined);
  };

  const debouncedTags = useDebounce(tags, 500);

  useEffect(() => {
    fetchFeeds();
  }, []);

  useEffect(() => {
    setCurrentFeedId(undefined);
    setCurrentFeed(undefined);
    fetchFeeds();
  }, [debouncedTags]);

  useUpdateEffect(() => {
    if (feeds) setTotalPages(feeds.items.length / itemsPerPage);
    setActivePage(1);
    const feedList = getFeeds();
    if (feedList) setFeedPage(feedList);
    setIsLoading(false);
  }, [feeds]);

  useUpdateEffect(() => {
    const feedList = getFeeds();
    if (feedList) setFeedPage(feedList);
  }, [activePage]);

  const getFeeds = () => {
    if (feeds && activePage) {
      return feeds.items.slice(
        (activePage - 1) * itemsPerPage,
        (activePage - 1) * itemsPerPage + itemsPerPage
      );
    }
    return null;
  };

  const fetchFeeds = async function() {
    setIsLoading(true);
    const result = await axios(getSearchURL(tags));
    const parsedResult: Response = result.data;
    setFeeds(parsedResult);
  };

  const getSearchURL = (tags: string | undefined) => {
    const corsServerURL = "http://localhost:8080/";
    let baseAPIUrl = new URL(
      "https://flickr.com/services/feeds/photos_public.gne"
    );
    if (tags) baseAPIUrl.searchParams.set("tags", tags);
    baseAPIUrl.searchParams.set("format", "json");
    baseAPIUrl.searchParams.set("nojsoncallback", "1");
    return corsServerURL + baseAPIUrl;
  };

  const handlePaginationClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    pageInfo: any
  ) => {
    setActivePage(pageInfo.activePage);
  };

  return (
    <FlickrApp
      feeds={feedPage}
      isLoading={isLoading}
      activePage={activePage}
      totalPages={totalPages}
      handlePaginationClick={handlePaginationClick}
      handleSearchInput={handleSearchInput}
      currentFeed={currentFeed}
      handleFeedClick={handleFeedClick}
      handleBackButtonClick={handleBackButtonClick}
    />
  );
};

export { App };
