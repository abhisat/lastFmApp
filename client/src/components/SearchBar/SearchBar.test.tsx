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

  // it("calls onSearchInput", () => {
  //   const SearchBar = shallowMountSearchBar();
  //   SearchBar.find('input').simulate();
  //   expect(Result.find(".error")).toHaveLength(1);
  //   expect(Result.find(".error").text()).toEqual("This is an error test.");
  // });

  // it("displays the loading spinner while loading", () => {
  //   const Result = shallowMountSearchBar();
  //   expect(Result.find(".result")).toHaveLength(1);
  //   expect(Result.find(".result").text()).toEqual("This is a result test.");
  // });
});
