import React from "react";
import { PhotoDetail, PhotoDetailProps } from ".";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import toJson from "enzyme-to-json";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const handlebackButtonClick: jest.Mock = jest.fn();

const props: PhotoDetailProps = {
  title: "GODAVARI BY KERSOM 101 To 108 Series Kurtis Wholesale 8 Pcs",
  link: "https://www.flickr.com/photos/186442569@N08/49546287068/",
  media: "https://live.staticflickr.com/65535/49546287068_db0d0b61b8_m.jpg",
  publishedDate: "2020-02-17T00:08:53-08:00",
  author: 'nobody@flickr.com ("wholesalealisa")',
  tags: "",
  handleBackButtonClick: handlebackButtonClick
};

const mountApp = () => {
  const wrapper: Enzyme.ReactWrapper = mount(<PhotoDetail {...props} />);
  wrapper.update();
  return wrapper;
};

describe("<PhotoDetail/>", () => {
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
