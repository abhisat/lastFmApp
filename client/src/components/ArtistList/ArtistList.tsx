import React, { useState } from "react";
import { ArtistListItem } from "../ArtistListItem/ArtistListItem";
import {
  List,
  Pagination,
  Container,
  PaginationProps,
  Header
} from "semantic-ui-react";
import Loader from "react-loader-spinner";
import { ResponseItem } from "../../types/ResponseTypes";
import "./ArtistList.css";
import { listeners } from "cluster";

export interface ArtistListProps {
  title: string;
  feeds: Array<ResponseItem>;
  isLoading: boolean;
  activePage: number;
  totalPages: number;
  handleFeedClick(id: number): void;
  handlePaginationClick(
    e: React.MouseEvent<HTMLElement>,
    pageInfo: PaginationProps
  ): void;
}
const ArtistList: React.FunctionComponent<ArtistListProps> = (
  props: ArtistListProps
) => {
  const {
    title,
    feeds,
    isLoading,
    totalPages,
    activePage,
    handlePaginationClick,
    handleFeedClick
  } = props;

  const feed = feeds ? (
    feeds.map((feedItem: ResponseItem, id: number) => {
      return (
        <List.Item key={id + feedItem.name + feedItem.url}>
          <ArtistListItem
            id={id}
            name={feedItem.name}
            playcount={feedItem.playcount}
            listeners={feedItem.listeners}
            url={feedItem.url}
            image={feedItem.image[0]["#text"]}
            isLoading={isLoading}
            handleClick={handleFeedClick}
          />
        </List.Item>
      );
    })
  ) : (
    <Loader type='TailSpin' color={"#0063dc"} height={100} width={100} />
  );
  const headerContent = feeds
    ? feeds.length != 0
      ? `... Showing ${title}`
      : `Sorry no content was found.`
    : null;
  return (
    <React.Fragment>
      {isLoading ? null : (
        <Header className={"resultHeader"} as='h2'>
          {headerContent}
        </Header>
      )}
      <Container className={"feedContainer"}>
        <List divided className={"list"}>
          {feed}
        </List>
      </Container>
      <Container className={"paginationContainer"}>
        {isLoading && totalPages ? null : (
          <Pagination
            className={"pagination"}
            activePage={activePage}
            onPageChange={handlePaginationClick}
            totalPages={totalPages}
            ellipsisItem={null}
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export { ArtistList };
