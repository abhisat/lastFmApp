import React, { useState, useEffect, SyntheticEvent, ReactText } from "react";
import axios from "axios";
import { SearchBar } from "../SearchBar/SearchBar";
import { ResultList } from "../ResultList/ResultList";
import Logo from "../../assets/logo.png";
import {
  Image,
  Container,
  PaginationProps,
  Button,
  Icon
} from "semantic-ui-react";
import { TrackResponse, ResponseItem } from "../../types/ResponseTypes";
import Loader from "react-loader-spinner";
import { RouteComponentProps } from "react-router-dom";
import { Pagination } from "semantic-ui-react";
import "./TopTracks.css";

const TopTracks: React.FunctionComponent<RouteComponentProps> = props => {
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
    const parsedFeeds: TrackResponse = result.data.toptracks;
    setTotalPages(parsedFeeds["@attr"]["totalPages"]);
    parsedFeeds.track.length > 5
      ? setFeeds(parsedFeeds.track.slice(parsedFeeds.track.length - 5))
      : setFeeds(parsedFeeds.track);

    setIsLoading(false);
  };

  const getSearchURL = () => {
    const corsServerURL = process.env.REACT_APP_CORS_SERVER;
    let baseAPIUrl = new URL(process.env.REACT_APP_BASE_URL);
    const urlParam = new URLSearchParams(props.location.search);
    const artist = urlParam.has("q") ? urlParam.get("q") : null;
    setFeedTitle(`Top Tracks by ${artist}`);
    baseAPIUrl.searchParams.set("artist", artist);
    baseAPIUrl.searchParams.set("method", "artist.gettoptracks");
    baseAPIUrl.searchParams.set("api_key", "9bfb0463ecfb5dd130cb40efbd898af0");
    baseAPIUrl.searchParams.set("format", "json");
    baseAPIUrl.searchParams.set("limit", itemsPerPage);
    baseAPIUrl.searchParams.set("page", activePage.toString());
    return corsServerURL + baseAPIUrl;
  };

  const handlePaginationClick = (
    e: SyntheticEvent,
    pageInfo: PaginationProps
  ) => {
    let pageNumber: ReactText = pageInfo.activePage;
    setIsLoading(true);
    setActivePage(pageNumber);
  };

  const handleBackButtonClick = () => {
    props.history.goBack();
  };

  return (
    <React.Fragment>
      <Container className='appContainer'>
        <Image src={Logo} className={"logo"}></Image>
        <SearchBar />
        <Button
          className='ui button backButton'
          onClick={handleBackButtonClick}
        >
          <Icon name='arrow left' />
        </Button>
        {isLoading ? (
          <Loader type='TailSpin' color={"#b90000"} height={100} width={100} />
        ) : (
          <ResultList title={feedTitle} feeds={feeds} isLoading={isLoading} />
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

export { TopTracks };
