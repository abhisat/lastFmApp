import React, { useEffect } from "react";
import { App } from "./App";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import { render, fireEvent, RenderResult, wait } from "@testing-library/react";
import toJson from "enzyme-to-json";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-test-renderer";
import { Container } from "semantic-ui-react";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});
var mock = new MockAdapter(axios);
const fakeResponse = {
  artists: {
    artist: [
      {
        name: "Arctic Monkeys",
        playcount: "349443530",
        listeners: "3618819",
        mbid: "ada7a83c-e3e1-40f1-93f9-3e73dbc9298a",
        url: "https://www.last.fm/music/Arctic+Monkeys",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega"
          }
        ]
      },
      {
        name: "Tyler, the Creator",
        playcount: "71334421",
        listeners: "934630",
        mbid: "f6beac20-5dfe-4d1f-ae02-0b0a740aafd6",
        url: "https://www.last.fm/music/Tyler,+the+Creator",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega"
          }
        ]
      },
      {
        name: "David Bowie",
        playcount: "204672069",
        listeners: "3466689",
        mbid: "5441c29d-3602-4898-b1a1-b77fa23b8e50",
        url: "https://www.last.fm/music/David+Bowie",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega"
          }
        ]
      },
      {
        name: "Coldplay",
        playcount: "372781622",
        listeners: "5511084",
        mbid: "cc197bad-dc9c-440d-a5b5-d52ba2e14234",
        url: "https://www.last.fm/music/Coldplay",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega"
          }
        ]
      },
      {
        name: "Harry Styles",
        playcount: "26240527",
        listeners: "476671",
        mbid: "",
        url: "https://www.last.fm/music/Harry+Styles",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge"
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega"
          }
        ]
      }
    ],
    "@attr": {
      page: "5",
      perPage: "5",
      totalPages: "631906",
      total: "3159526"
    }
  }
};

const props = {};

const state = {};

const mountApp = (props = {}, state = {}) => {
  const wrapper = render(<App {...props} />);
  return wrapper;
};

describe("<App/>", () => {
  let App: RenderResult;

  beforeEach(() => {
    App = mountApp(props, state);
    mock.onGet().reply(200, fakeResponse);
  });

  afterEach(() => {});

  it("renders without crashing", () => {
    mountApp(props, state);
  });

  it("Matches the snapshot", () => {
    expect(App).toMatchSnapshot();
  });
});
