import React from "react";
import "./PhotoDetail.css";
import { Button, Icon, Image, Card, Container } from "semantic-ui-react";

export interface PhotoDetailProps {
  title: string;
  link: string;
  media: string;
  publishedDate: string;
  description: string;
  author: string;
  tags: string;
  handleBackButtonClick(): void;
}

const PhotoDetail: React.FunctionComponent<PhotoDetailProps> = (
  props: PhotoDetailProps
) => {
  const {
    title,
    link,
    media,
    publishedDate,
    description,
    author,
    tags,
    handleBackButtonClick
  } = props;

  return (
    <React.Fragment>
      <Button className='ui button backButton' onClick={handleBackButtonClick}>
        <Icon name='arrow left' />
      </Button>
      <Container className={"photoCardContainer"}>
        <Card href={link} className={"photoCard"}>
          <Image src={media} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>{publishedDate}</Card.Meta>
            <Card.Description className={"cardDescription"}>
              {description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {author}
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {tags}
            </a>
          </Card.Content>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export { PhotoDetail };
