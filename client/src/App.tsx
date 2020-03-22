import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDebounce } from "./utils/DebounceHook";
import { useUpdateEffect } from "./utils/UseUpdateEffect";
import { LastFmApp } from "./components/LastFmApp";
import { Response, ResponseItem } from "./types/ResponseTypes";
import { PaginationProps } from "semantic-ui-react";

const App: React.FunctionComponent = () => {
  const [feedTitle, setFeedTitle] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [feeds, setFeeds] = useState<Response>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentFeed, setCurrentFeed] = useState<ResponseItem>();
  const [activePage, setActivePage] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [feedPage, setFeedPage] = useState<Array<ResponseItem>>();
  const itemsPerPage = 10;

  const debouncedTags = useDebounce(country, 500);

  useEffect(() => {
    fetchFeeds();
  }, []);

  useUpdateEffect(() => {
    setCurrentFeed(undefined);
    fetchFeeds();
  }, [debouncedTags]);

  useUpdateEffect(() => {
    if (feeds) setTotalPages(feeds.artist.length / itemsPerPage);
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
    const result = await axios(getSearchURL(country));
    const parsedResult: Response = country
      ? result.data.topartists
      : result.data.artists;
    setFeeds(parsedResult);
  };

  const getSearchURL = (country: string | undefined) => {
    const corsServerURL = "http://localhost:8081/";
    let baseAPIUrl = new URL("http://ws.audioscrobbler.com/2.0/");
    if (country) {
      baseAPIUrl.searchParams.set("country", country);
      baseAPIUrl.searchParams.set("method", "geo.gettopartists");
    } else {
      baseAPIUrl.searchParams.set("method", "chart.gettopartists");
    }

    baseAPIUrl.searchParams.set("api_key", "9bfb0463ecfb5dd130cb40efbd898af0");
    baseAPIUrl.searchParams.set("format", "json");
    baseAPIUrl.searchParams.set("limit", "10");
    return corsServerURL + baseAPIUrl;
  };

  const getFeeds = () => {
    if (feeds && activePage) {
      return feeds.artist.slice(
        (activePage - 1) * itemsPerPage,
        (activePage - 1) * itemsPerPage + itemsPerPage
      );
    }
    return null;
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    setCountry(input);
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
    <LastFmApp
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
