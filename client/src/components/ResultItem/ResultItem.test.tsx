import React from "react";
import { ResultItem, ResultItemProps } from ".";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import toJson from "enzyme-to-json";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const handleClick: jest.Mock = jest.fn();

const props: ResultItemProps = {
  id: 1,
  media: "https://live.staticflickr.com/65535/49546287068_db0d0b61b8_m.jpg",
  title: "GODAVARI BY KERSOM 101 To 108 Series Kurtis Wholesale 8 Pcs",
  author: 'nobody@flickr.com ("wholesalealisa")',
  date: "2020-02-17T00:08:53-08:00",
  tags: "",
  handleClick: handleClick,
  isLoading: false
};

const mountApp = () => {
  const wrapper: Enzyme.ReactWrapper = mount(<ResultItem {...props} />);
  wrapper.update();
  return wrapper;
};

describe("<ResultList/>", () => {
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
