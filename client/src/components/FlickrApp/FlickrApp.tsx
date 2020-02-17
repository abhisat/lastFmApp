import React from "react";
import { SearchBar } from "../SearchBar";
import { ResultList } from "../ResultList";
import { PhotoDetail } from "../PhotoDetail";
import Logo from "../../assets/logo.png";
import { Image, Container, PaginationProps } from "semantic-ui-react";
import "./FlickrApp.css";
import { ResponseItem } from "../../types/ResponseTypes";

interface FlickrAppProps {
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

const FlickrApp: React.FunctionComponent<FlickrAppProps> = props => {
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
    <PhotoDetail
      title={currentFeed.title}
      link={currentFeed.link}
      media={currentFeed.media.m}
      publishedDate={currentFeed.published}
      description={currentFeed.description}
      author={currentFeed.author}
      tags={currentFeed.tags}
      handleBackButtonClick={handleBackButtonClick}
    />
  ) : (
    <ResultList
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

export { FlickrApp };
