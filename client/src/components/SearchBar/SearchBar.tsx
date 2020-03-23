import React, { SyntheticEvent } from "react";
import { Dropdown, Container } from "semantic-ui-react";
import { COUNTRIES_DATA } from "./data/countries.js";
import { withRouter } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = withRouter(({ history, ...props }) => {
  const onSearchInput = (e: SyntheticEvent, { value }) => {
    let route: string = "/country";
    route = route.concat("?");
    route = route.concat(`q=${value}`);
    history.push(route);
  };
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
});

export { SearchBar };
