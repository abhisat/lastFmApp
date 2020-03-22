import React, { SyntheticEvent } from "react";
import { Dropdown, Container } from "semantic-ui-react";
import { COUNTRIES_DATA } from "./data/countries.js";
import "./SearchBar.css";

export interface SearchBarProps {
  isLoading: boolean;
  onSearchInput(e: SyntheticEvent, data: object): void;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = props => {
  const { isLoading, onSearchInput } = props;

  return (
    <Container className='searchContainer'>
      <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        className={"searchBar"}
        onChange={onSearchInput}
        options={COUNTRIES_DATA}
      />
    </Container>
  );
};

export { SearchBar };
