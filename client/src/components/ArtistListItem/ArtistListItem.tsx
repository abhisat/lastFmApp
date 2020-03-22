import React from "react";
import { Image, Item, Icon, Container } from "semantic-ui-react";
import { Facebook } from "react-content-loader";
import "./ArtistListItem.css";

export interface ArtistListItemData {
  id?: number;
  name?: string;
  playcount?: string;
  listeners?: string;
  url?: string;
  image?: string;
  isLoading: boolean;
  handleClick(id: number | undefined): void;
}

export interface ArtistListItemProps extends ArtistListItemData {
  isLoading: boolean;
}

const ArtistListItem: React.FunctionComponent<ArtistListItemProps> = props => {
  const {
    id,
    name,
    playcount,
    listeners,
    url,
    image,
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
            <Image className={"itemImage"} src={image} />
            <Item.Content className={"itemContent"}>
              <Item.Header as='a' className={"itemHeader text"}>
                {name}
              </Item.Header>
              <Item.Meta className={"text"}>
                <Icon name='location arrow' />
                {playcount}
              </Item.Meta>
              <Item.Extra className={"text"}>
                <Icon name='user' />
                {listeners}
              </Item.Extra>
              <Item.Extra className={"itemTags text"}>
                <Icon name='tags' />
                {url}
              </Item.Extra>
            </Item.Content>
          </Item>
        )}
      </Container>
    </React.Fragment>
  );
};

export { ArtistListItem };
