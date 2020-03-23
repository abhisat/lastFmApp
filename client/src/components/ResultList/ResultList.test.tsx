import React from "react";
import { ResultList, ResultListProps } from "./ResultList";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const handleFeedClick: jest.Mock = jest.fn();
const handlePaginationClick: jest.Mock = jest.fn();

const props: ResultListProps = {
  title: "Uploads from everyone",
  feeds: [
    {
      name: "Arctic Monkeys",
      playcount: "349443530",
      listeners: "3618819",
      mbid: "ada7a83c-e3e1-40f1-93f9-3e73dbc9298a",
      url: "https://www.last.fm/music/Arctic+Monkeys",
      streamable: "0",
      image: [
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "small"
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "medium"
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "large"
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "extralarge"
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "mega"
        }
      ]
    },
    {
      name: "Tyler, the Creator",
      playcount: "71334421",
      listeners: "934630",
      mbid: "f6beac20-5dfe-4d1f-ae02-0b0a740aafd6",
      url: "https://www.last.fm/music/Tyler,+the+Creator",
      streamable: "0",
      image: [
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "small"
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "medium"
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "large"
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "extralarge"
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "mega"
        }
      ]
    }
  ],
  isLoading: false,
  handleFeedClick: handleFeedClick
};

const mountApp = () => {
  const wrapper: Enzyme.ShallowWrapper = shallow(<ResultList {...props} />);
  wrapper.update();
  return wrapper;
};

describe("<ResultList/>", () => {
  let App: Enzyme.ShallowWrapper;

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
