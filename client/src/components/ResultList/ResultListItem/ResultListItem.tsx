import React, { SyntheticEvent } from "react";
import { Image, Item, Icon, Container } from "semantic-ui-react";
import { Facebook } from "react-content-loader";
import "./ResultListItem.css";

export interface ResultListItemData {
  name?: string;
  playcount?: string;
  listeners?: string;
  url?: string;
  image?: string;
  isLoading: boolean;
  handleClick?(value: string, e: SyntheticEvent): void;
}

export interface ResultListItemProps extends ResultListItemData {
  isLoading: boolean;
}

const ResultListItem: React.FunctionComponent<ResultListItemProps> = props => {
  const {
    name,
    playcount,
    listeners,
    url,
    image,
    isLoading,
    handleClick
  } = props;

  const listItemClick = (value: string, e: SyntheticEvent) => {
    if (handleClick) {
      handleClick(value, e);
    }
  };

  return (
    <React.Fragment>
      <Container className={"resultItemContainer"}>
        {isLoading ? (
          <Facebook className={"loader"} />
        ) : (
          <Item className={"listItem"} onClick={e => listItemClick(name, e)}>
            <Image className={"itemImage"} src={image} />
            <Item.Content className={"itemContent"}>
              <Item.Header as='a' className={"itemHeader text"}>
                {name}
              </Item.Header>
              <Item.Meta className={"text"}>
                <Icon name='play' />
                {playcount}
              </Item.Meta>
              <Item.Extra className={"text"}>
                <Icon name='users' />
                {listeners}
              </Item.Extra>
              <Item.Extra className={"itemTags text"}>
                <Icon name='linkify' />
                {url}
              </Item.Extra>
            </Item.Content>
          </Item>
        )}
      </Container>
    </React.Fragment>
  );
};

export { ResultListItem };
