import React, { useState, useEffect, SyntheticEvent } from "react";
import { useDebounce } from "../../utils/DebounceHook";
import { useUpdateEffect } from "../../utils/UseUpdateEffect";
import { SearchBar } from "../SearchBar/SearchBar";
import { ArtistList } from "../ArtistList/ArtistList";
import { ArtistDetail } from "../ArtistDetail/ArtistDetail";
import Logo from "../../assets/logo.png";
import { Image, Container, PaginationProps } from "semantic-ui-react";
import { ResponseItem } from "../../types/ResponseTypes";
import "./LastFmApp.css";

const Home: React.FunctionComponent = () => {
  const [feedTitle, setFeedTitle] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [feeds, setFeeds] = useState<Response>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentFeed, setCurrentFeed] = useState<ResponseItem>();
  const [activePage, setActivePage] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [feedPage, setFeedPage] = useState<Array<ResponseItem>>();
  const itemsPerPage = 10;

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
  const pageContent = currentFeed ? (
    <ArtistDetail
      name={currentFeed.name}
      url={currentFeed.url}
      playCount={currentFeed.playcount}
      listeners={currentFeed.listeners}
      imageLink={currentFeed.url}
      handleBackButtonClick={handleBackButtonClick}
    />
  ) : (
    <ArtistList
      title={feedTitle}
      feeds={feeds}
      isLoading={isLoading}
      activePage={activePage}
      totalPages={totalPages}
      handlePaginationClick={handlePaginationClick}
      handleFeedClick={handleFeedClick}
    />
  );
  return (
    <React.Fragment>
      <Container className='appContainer'>
        <Image src={Logo} className={"logo"}></Image>
        <SearchBar isLoading={isLoading} onSearchInput={handleSearchInput} />
        {pageContent}
      </Container>
    </React.Fragment>
  );
};

export { Home };
