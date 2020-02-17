import React from "react";
import { SearchBar, SearchBarProps } from ".";
import Enzyme, { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});
const onSearchInput: jest.Mock = jest.fn();

const loadingProps: SearchBarProps = {
  isLoading: true,
  onSearchInput: onSearchInput
};

const inputProps: SearchBarProps = {
  isLoading: false,
  onSearchInput: onSearchInput
};

const shallowMountSearchBar = () => {
  const wrapper: Enzyme.ShallowWrapper = shallow(<SearchBar {...inputProps} />);
  return wrapper;
};

describe("<SearchBar />", () => {
  it("Matches the snapshot", () => {
    const SearchBar = shallowMountSearchBar();
    expect(toJson(SearchBar)).toMatchSnapshot();
  });
});
