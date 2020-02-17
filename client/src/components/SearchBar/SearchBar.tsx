import React from "react";
import { Input, Container } from "semantic-ui-react";
import "./SearchBar.css";

export interface SearchBarProps {
  isLoading: boolean;
  onSearchInput(e: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = props => {
  const { isLoading, onSearchInput } = props;
  return (
    <Container className='searchContainer'>
      <Input
        type={"text"}
        size={"large"}
        className={"searchBar"}
        loading={isLoading}
        focus
        placeholder='Search for ...'
        onChange={onSearchInput}
      />
    </Container>
  );
};

export { SearchBar };
