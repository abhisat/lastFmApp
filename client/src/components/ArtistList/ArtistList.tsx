import React, { SyntheticEvent } from "react";
import { ArtistListItem } from "./ArtistListItem/";
import { List, Container, Header } from "semantic-ui-react";
import Loader from "react-loader-spinner";
import { ResponseItem } from "../../types/ResponseTypes";
import "./ArtistList.css";

export interface ArtistListProps {
  title: string;
  feeds: Array<ResponseItem>;
  isLoading: boolean;
  handleFeedClick(value: string, e: SyntheticEvent): void;
}

const ArtistList: React.FunctionComponent<ArtistListProps> = (
  props: ArtistListProps
) => {
  const { title, feeds, isLoading, handleFeedClick } = props;

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
    ? feeds.length !== 0
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
    </React.Fragment>
  );
};

export { ArtistList };
