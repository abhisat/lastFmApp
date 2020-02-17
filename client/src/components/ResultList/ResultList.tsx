import React, { useState } from "react";
import { ResultItem } from "../ResultItem/ResultItem";
import { List, Pagination } from "semantic-ui-react";
import "./ResultList.css";
import { Facebook } from "react-content-loader";
import { ResponseItem } from "../../types/ResponseTypes";

export interface ResultListProps {
  feeds: Array<ResponseItem>;
  isLoading: boolean;
  activePage: number;
  totalPages: number;
  handleFeedClick(id: number): void;
  handlePaginationClick(e: React.MouseEvent<HTMLElement>, pageInfo: any): void;
}
const ResultList: React.FunctionComponent<ResultListProps> = (
  props: ResultListProps
) => {
  const {
    feeds,
    isLoading,
    totalPages,
    activePage,
    handlePaginationClick,
    handleFeedClick
  } = props;

  const feed = feeds ? (
    feeds.map((feedItem: any, id: number) => {
      return (
        <List.Item key={id + feedItem.title + feedItem.date}>
          <ResultItem
            id={id}
            media={feedItem.media}
            author={feedItem.author}
            date={feedItem.date}
            title={feedItem.title}
            tags={feedItem.tags}
            isLoading={isLoading}
            handleClick={handleFeedClick}
          />
        </List.Item>
      );
    })
  ) : (
    <Facebook />
  );

  return (
    <React.Fragment>
      <List divided>{feed}</List>
      <Pagination
        activePage={activePage}
        onPageChange={handlePaginationClick}
        totalPages={totalPages}
        ellipsisItem={null}
      />
    </React.Fragment>
  );
};

export { ResultList };
