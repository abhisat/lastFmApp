import React, { useState, useEffect, SyntheticEvent, ReactText } from "react";
import axios from "axios";
import { SearchBar } from "../SearchBar/SearchBar";
import { ArtistList } from "../ArtistList/ArtistList";
import Logo from "../../assets/logo.png";
import { Image, Container, PaginationProps } from "semantic-ui-react";
import { ArtistResponse, ResponseItem } from "../../types/ResponseTypes";
import Loader from "react-loader-spinner";
import { RouteComponentProps } from "react-router-dom";
import { Pagination } from "semantic-ui-react";
import "./Country.css";

const Country: React.FunctionComponent<RouteComponentProps> = props => {
  const [feedTitle, setFeedTitle] = useState<string>();
  const [feeds, setFeeds] = useState<ResponseItem[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<ReactText>(1);
  const [totalPages, setTotalPages] = useState<number>();
  const itemsPerPage = "5";
  const { history } = props;

  useEffect(() => {
    fetchFeeds();
  }, [activePage]);

  const fetchFeeds = async function() {
    const result = await axios(getSearchURL());
    const parsedFeeds: ArtistResponse = result.data.topartists;
    setTotalPages(parsedFeeds["@attr"]["totalPages"]);
    parsedFeeds.artist.length > 5
      ? setFeeds(parsedFeeds.artist.slice(parsedFeeds.artist.length - 5))
      : setFeeds(parsedFeeds.artist);

    setIsLoading(false);
  };

  const getSearchURL = () => {
    const corsServerURL = "http://localhost:8081/";
    let baseAPIUrl = new URL("http://ws.audioscrobbler.com/2.0/");
    const urlParam = new URLSearchParams(props.location.search);
    const country = urlParam.has("q") ? urlParam.get("q") : null;
    baseAPIUrl.searchParams.set("country", country);
    baseAPIUrl.searchParams.set("method", "geo.gettopartists");
    baseAPIUrl.searchParams.set("api_key", "9bfb0463ecfb5dd130cb40efbd898af0");
    baseAPIUrl.searchParams.set("format", "json");
    baseAPIUrl.searchParams.set("limit", itemsPerPage);
    baseAPIUrl.searchParams.set("page", activePage.toString());
    return corsServerURL + baseAPIUrl;
  };

  const handleFeedClick = (value: string, e: SyntheticEvent) => {
    let route: string = "/artist";
    route = route.concat("?");
    route = route.concat(`q=${value}`);
    history.push(route);
  };

  const handlePaginationClick = (
    e: SyntheticEvent,
    pageInfo: PaginationProps
  ) => {
    let pageNumber: ReactText = pageInfo.activePage;
    setActivePage(pageNumber);
  };

  return (
    <React.Fragment>
      <Container className='appContainer'>
        <Image src={Logo} className={"logo"}></Image>
        <SearchBar />
        {isLoading ? (
          <Loader type='TailSpin' color={"#0063dc"} height={100} width={100} />
        ) : (
          <ArtistList
            title={feedTitle}
            feeds={feeds}
            isLoading={isLoading}
            handleFeedClick={handleFeedClick}
          />
        )}
        <Pagination
          className={"pagination"}
          activePage={activePage}
          onPageChange={handlePaginationClick}
          totalPages={totalPages}
          ellipsisItem={null}
        />
      </Container>
    </React.Fragment>
  );
};

export { Country };
