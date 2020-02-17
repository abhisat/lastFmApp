import React from "react";
import { Image, Item, Icon, Container } from "semantic-ui-react";
import { Facebook } from "react-content-loader";
import { DetailLink } from "../../types/ResponseTypes";
import "./ResultItem.css";

export interface ResultItemData {
  id?: number;
  media?: string;
  title?: string;
  author?: string;
  date?: string;
  tags?: string;
  handleClick(id: number | undefined): void;
}

export interface ResultItemProps extends ResultItemData {
  isLoading: boolean;
}

const ResultItem: React.FunctionComponent<ResultItemProps> = props => {
  const {
    id,
    media,
    author,
    title,
    date,
    tags,
    isLoading,
    handleClick
  } = props;

  return (
    <React.Fragment>
      <Container className={"resultItemContainer"}>
        {isLoading ? (
          <Facebook className={"loader"} />
        ) : (
          <Item className={"listItem"} onClick={() => handleClick(id)}>
            <Image className={"itemImage"} src={media} />
            <Item.Content className={"itemContent"}>
              <Item.Header as='a' className={"itemHeader text"}>
                {title}
              </Item.Header>
              <Item.Meta className={"text"}>
                <Icon name='location arrow' />
                {date}
              </Item.Meta>
              <Item.Extra className={"text"}>
                <Icon name='user' />
                {author}
              </Item.Extra>
              <Item.Extra className={"itemTags text"}>
                <Icon name='tags' />
                {tags}
              </Item.Extra>
            </Item.Content>
          </Item>
        )}
      </Container>
    </React.Fragment>
  );
};

export { ResultItem };
