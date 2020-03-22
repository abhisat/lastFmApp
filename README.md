# FlickrApp

LastFmApp is an app to search the most populars artists in a country using the LastFm API.

The demo app is hosted on: [FlickrApp](https://flickrapp-demo.herokuapp.com "Flickr App")

## Installation and Usage

After cloning the repository with:

git clone https://github.com/abhisat/FlickrApp.git

Dependencies to run the app locally: Docker

Step 1: Install Docker

Here is a link on how to install Docker:
https://docs.docker.com/install/

Step 2: Run the docker build/run command from the root dir

```bash
yarn dev-build (only needed for first-time build)
```

```bash
yarn dev-start (for subsequent runs or after making changes to DockerFile)
```

The app should be accessible on localhost:3001

## Tests

To run tests:

```bash
yarn test
```

from the root or /client dir.

## Things that can still be improved:

- Add more tests. At the moment there are only snapshot tests and a mockserver sert up to test API requests.
- Improve the UI.
- Browser compatibility: currently only officially tested for Chrome Version 79.0.3945.130.

## Design Choices:

The app uses a Props-down events-up pattern. Ideally an app like this if grows would need to be a multipage app with state-management. However, given the app is really small, the use of react-router and redux could not be justified.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT
