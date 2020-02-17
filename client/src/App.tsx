import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDebounce } from "./utils/DebounceHook";
import { useUpdateEffect } from "./utils/UseUpdateEffect";
import { FlickrApp } from "./components/FlickrApp";
import { Response, ResponseItem } from "./types/ResponseTypes";
import { PaginationProps } from "semantic-ui-react";

const App: React.FunctionComponent = () => {
  const [feedTitle, setFeedTitle] = useState<string>();
  const [tags, setTags] = useState<string>();
  const [feeds, setFeeds] = useState<Response>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentFeed, setCurrentFeed] = useState<ResponseItem>();
  const [activePage, setActivePage] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [feedPage, setFeedPage] = useState<Array<ResponseItem>>();
  const itemsPerPage = 10;

  const debouncedTags = useDebounce(tags, 500);

  useEffect(() => {
    fetchFeeds();
  }, []);

  useUpdateEffect(() => {
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

  const fetchFeeds = async function() {
    setIsLoading(true);
    const result = await axios(getSearchURL(tags));
    const parsedResult: Response = result.data;
    setFeeds(parsedResult);
    setFeedTitle(parsedResult.title);
  };

  const getSearchURL = (tags: string | undefined) => {
    const corsServerURL = process.env.REACT_APP_CORS_SERVER!;
    let baseAPIUrl = new URL(process.env.REACT_APP_BASE_URL!);
    if (tags) baseAPIUrl.searchParams.set("tags", tags);
    baseAPIUrl.searchParams.set("format", "json");
    baseAPIUrl.searchParams.set("nojsoncallback", "1");
    return corsServerURL + baseAPIUrl;
  };

  const getFeeds = () => {
    if (feeds && activePage) {
      return feeds.items.slice(
        (activePage - 1) * itemsPerPage,
        (activePage - 1) * itemsPerPage + itemsPerPage
      );
    }
    return null;
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    setTags(input);
  };

  const handleFeedClick = (currentFeedId: number) => {
    if (feedPage && activePage) {
      setCurrentFeed(feedPage[currentFeedId]);
    }
  };

  const handleBackButtonClick = () => {
    setCurrentFeed(undefined);
  };

  const handlePaginationClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    pageInfo: PaginationProps
  ) => {
    let pageNumber: number | undefined;
    typeof pageInfo.activePage == "string"
      ? (pageNumber = parseInt(pageInfo.activePage))
      : (pageNumber = pageInfo.activePage);
    setActivePage(pageNumber);
  };

  return (
    <FlickrApp
      feedTitle={feedTitle}
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
