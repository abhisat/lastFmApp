import React from "react";
import "./ArtistDetail.css";
import { Button, Icon, Image, Card, Container } from "semantic-ui-react";

const ArtistDetail: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Button className='ui button backButton' onClick={handleBackButtonClick}>
        <Icon name='arrow left' />
      </Button>
      <Container className={"photoCardContainer"}>
        <Card href={url} className={"photoCard"}>
          <Image src={url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{playCount}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {listeners}
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='tags' />
              {name}
            </a>
          </Card.Content>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export { ArtistDetail };
