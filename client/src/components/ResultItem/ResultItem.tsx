import React from "react";
import { Image, Item, Icon, Container } from "semantic-ui-react";
import { Facebook } from "react-content-loader";
import "./ResultItem.css";

export interface ResultItemData {
  id?: number;
  media?: any;
  title?: string;
  author?: string;
  date?: Date;
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

  return isLoading ? (
    <Facebook className={"loader"} />
  ) : (
    <React.Fragment>
      <Container className={"resultItemContainer"}>
        <Item className={"listItem"} onClick={() => handleClick(id)}>
          <Image className={"itemImage"} src={media.m} />
          <Item.Content className={"itemContent"}>
            <Item.Header as='a'>{title}</Item.Header>
            <Item.Meta>
              <Icon name='location arrow' />
              {date}
            </Item.Meta>
            <Item.Extra>{author}</Item.Extra>
            <Item.Extra className={"itemTags"}>{tags}</Item.Extra>
          </Item.Content>
        </Item>
      </Container>
    </React.Fragment>
  );
};

export { ResultItem };
