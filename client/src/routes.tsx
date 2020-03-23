import { Home } from "./components/Home";
import { TopTracks } from "./components/TopTracks";
import { Country } from "./components/Country/Country";

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
    component: Country
  },
  {
    path: "/artist",
    key: "SEARCH_BY_ARTIST",
    exact: true,
    component: TopTracks
  }
];

export default Routes;
