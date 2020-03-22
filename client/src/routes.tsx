import React from "react";
import { Home } from "./components/Home";
import { ArtistList } from "./components/ArtistList/ArtistList";
import { ArtistDetail } from "./components/ArtistDetail/ArtistDetail";

const Routes = [
  {
    path: "/",
    key: "HOME",
    exact: true,
    component: Home
  },
  {
    path: "/country",
    key: "SEARCH_BY_COUNTRY",
    exact: true,
    component: ArtistList
  },
  {
    path: "/artist",
    key: "SEARCH_BY_ARTIST",
    exact: true,
    component: ArtistDetail
  }
];

export default Routes;
