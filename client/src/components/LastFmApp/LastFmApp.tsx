import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ArtistList } from "../ArtistList/ArtistList";
import { ArtistDetail } from "../ArtistDetail/ArtistDetail";
import Logo from "../../assets/logo.png";
import { Image, Container, PaginationProps } from "semantic-ui-react";
import { ResponseItem } from "../../types/ResponseTypes";
import "./LastFmApp.css";

export interface LastFmAppProps {
  feedTitle: string;
  feeds: Array<ResponseItem>;
  currentFeed: ResponseItem;
  isLoading: boolean;
  activePage: number;
  totalPages: number;
  handlePaginationClick(
    e: React.MouseEvent<HTMLElement>,
    pageInfo: PaginationProps
  ): void;
  handleFeedClick(id: number): void;
  handleBackButtonClick(): void;
  handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void;
}

const LastFmApp: React.FunctionComponent<LastFmAppProps> = props => {
  const {
    feedTitle,
    feeds,
    isLoading,
    handleSearchInput,
    currentFeed,
    activePage,
    totalPages,
    handlePaginationClick,
    handleBackButtonClick,
    handleFeedClick
  } = props;

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

export { LastFmApp };
