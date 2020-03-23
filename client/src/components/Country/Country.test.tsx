import React from "react";
import { Country } from "./Country";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { createMemoryHistory, createLocation } from "history";
import { match } from "react-router";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

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
    <Country history={history} location={location} match={match} />
  );
  wrapper.update();
  return wrapper;
};

describe("<Country/>", () => {
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
