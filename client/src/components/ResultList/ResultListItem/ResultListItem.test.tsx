import React from "react";
import { ResultListItem, ResultListItemProps } from "./ResultListItem";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import toJson from "enzyme-to-json";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const handleClick: jest.Mock = jest.fn();

const props: ResultListItemProps = {
  name: "Arctic Monkeys",
  playcount: "349443530",
  listeners: "3618819",
  isLoading: false,
  url: "https://www.last.fm/music/Arctic+Monkeys",
  image:
    "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
  handleClick: handleClick
};

const mountApp = () => {
  const wrapper: Enzyme.ReactWrapper = mount(<ResultListItem {...props} />);
  wrapper.update();
  return wrapper;
};

describe("<ArtistListItem/>", () => {
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
