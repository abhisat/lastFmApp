import React from "react";
import { LastFmApp, LastFmAppProps } from "./LastFmApp";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import toJson from "enzyme-to-json";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const handlePaginationClick: jest.Mock = jest.fn();
const handleFeedClick: jest.Mock = jest.fn();
const handlebackButtonClick: jest.Mock = jest.fn();
const handleSearchInput: jest.Mock = jest.fn();

const props: LastFmAppProps = {
  feedTitle: "Uploads from everyone",
  feeds: [
    {
      title: "GODAVARI BY KERSOM 101 To 108 Series Kurtis Wholesale 8 Pcs",
      link: "https://www.flickr.com/photos/186442569@N08/49546287068/",
      media: {
        m: "https://live.staticflickr.com/65535/49546287068_db0d0b61b8_m.jpg"
      },
      date_taken: "2020-02-17T00:08:53-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/186442569@N08/">wholesalealisa</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/186442569@N08/49546287068/" title="GODAVARI BY KERSOM 101 To 108 Series Kurtis Wholesale 8 Pcs"><img src="https://live.staticflickr.com/65535/49546287068_db0d0b61b8_m.jpg" width="164" height="240" alt="GODAVARI BY KERSOM 101 To 108 Series Kurtis Wholesale 8 Pcs" /></a></p> <p> <a href="http://bit.ly/3bOx9cj" rel="noreferrer nofollow">bit.ly/3bOx9cj</a></p>',
      published: "2020-02-17T08:08:53Z",
      author: 'nobody@flickr.com ("wholesalealisa")',
      author_id: "186442569@N08",
      tags: ""
    },
    {
      title:
        "Foto con el móvil y retocado con snapseed tren frontal #Tren #snapseed #sevilla",
      link: "https://www.flickr.com/photos/sergiodominguez/49546287688/",
      media: {
        m: "https://live.staticflickr.com/65535/49546287688_880725e19f_m.jpg"
      },
      date_taken: "2020-02-16T18:49:41-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/sergiodominguez/">Sergio J. Dominguez Leal</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/sergiodominguez/49546287688/" title="Foto con el móvil y retocado con snapseed tren frontal #Tren #snapseed #sevilla"><img src="https://live.staticflickr.com/65535/49546287688_880725e19f_m.jpg" width="114" height="240" alt="Foto con el móvil y retocado con snapseed tren frontal #Tren #snapseed #sevilla" /></a></p> ',
      published: "2020-02-17T08:09:11Z",
      author: 'nobody@flickr.com ("Sergio J. Dominguez Leal")',
      author_id: "41423105@N02",
      tags: "tren snapseed sevilla"
    }
  ],
  currentFeed: {
    title:
      "Foto con el móvil y retocado con snapseed tren frontal #Tren #snapseed #sevilla",
    link: "https://www.flickr.com/photos/sergiodominguez/49546287688/",
    media: {
      m: "https://live.staticflickr.com/65535/49546287688_880725e19f_m.jpg"
    },
    date_taken: "2020-02-16T18:49:41-08:00",
    description:
      ' <p><a href="https://www.flickr.com/people/sergiodominguez/">Sergio J. Dominguez Leal</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/sergiodominguez/49546287688/" title="Foto con el móvil y retocado con snapseed tren frontal #Tren #snapseed #sevilla"><img src="https://live.staticflickr.com/65535/49546287688_880725e19f_m.jpg" width="114" height="240" alt="Foto con el móvil y retocado con snapseed tren frontal #Tren #snapseed #sevilla" /></a></p> ',
    published: "2020-02-17T08:09:11Z",
    author: 'nobody@flickr.com ("Sergio J. Dominguez Leal")',
    author_id: "41423105@N02",
    tags: "tren snapseed sevilla"
  },
  isLoading: false,
  activePage: 1,
  totalPages: 3,
  handlePaginationClick: handlePaginationClick,
  handleFeedClick: handleFeedClick,
  handleBackButtonClick: handlebackButtonClick,
  handleSearchInput: handleSearchInput
};

const mountApp = () => {
  const wrapper: Enzyme.ReactWrapper = mount(<LastFmApp {...props} />);
  wrapper.update();
  return wrapper;
};

describe("<FlickrApp/>", () => {
  let App: Enzyme.ReactWrapper;

  beforeEach(() => {
    App = mountApp();
  });

  afterEach(() => {});

  it("renders without crashing", () => {
    mountApp();
  });

  it("Matches the snapshot", () => {
    expect(toJson(App)).toMatchSnapshot();
  });
});
