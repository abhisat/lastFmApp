import React from "react";
import { SearchBar } from ".";
import Enzyme, { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});
const onSearchInput: jest.Mock = jest.fn();

const shallowMountSearchBar = () => {
  const wrapper: Enzyme.ShallowWrapper = shallow(<SearchBar />);
  return wrapper;
};

describe("<SearchBar />", () => {
  it("Matches the snapshot", () => {
    const SearchBar = shallowMountSearchBar();
    expect(toJson(SearchBar)).toMatchSnapshot();
  });
});
