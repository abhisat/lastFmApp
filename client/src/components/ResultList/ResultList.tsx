import React, { useState } from "react";
import { ResultItem } from "../ResultItem/ResultItem";
import {
  List,
  Pagination,
  Container,
  PaginationProps,
  Header
} from "semantic-ui-react";
import "./ResultList.css";
import Loader from "react-loader-spinner";
import { ResponseItem } from "../../types/ResponseTypes";

export interface ResultListProps {
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
const ResultList: React.FunctionComponent<ResultListProps> = (
  props: ResultListProps
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
      const date: string = new Date(feedItem.date_taken).toLocaleDateString();
      return (
        <List.Item key={id + feedItem.title + feedItem.date_taken}>
          <ResultItem
            id={id}
            media={feedItem.media.m}
            author={feedItem.author}
            date={date}
            title={feedItem.title}
            tags={feedItem.tags}
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

export { ResultList };
