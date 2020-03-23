import React from "react";
import { TopTracks } from "./TopTracks";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { createMemoryHistory, createLocation } from "history";
import { match } from "react-router";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const handlebackButtonClick: jest.Mock = jest.fn();

const mountApp = () => {
  const history = createMemoryHistory();
  const path = `/route/:id`;
  const match: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(":id", "1"),
    params: { id: "1" }
  };
  const location = createLocation(match.url);
  const wrapper: Enzyme.ShallowWrapper = shallow(
    <TopTracks history={history} location={location} match={match} />
  );
  wrapper.update();
  return wrapper;
};

describe("<TopTracks/>", () => {
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
