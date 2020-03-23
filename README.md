# FlickrApp

LastFmApp is an app to search the most populars artists in a country using the LastFm API.

The demo app is hosted on: [LastFMApp](https://lastfm-app-demo.herokuapp.com "LastFM App")

## Installation and Usage

After cloning the repository with:

git clone https://github.com/abhisat/lastFmApp.git

Dependencies to run the app locally:

## With Docker

Step 1: Install Docker

Here is a link on how to install Docker:
https://docs.docker.com/install/

Step 2: Run the docker build/run command from the root dir

```bash
docker-compose up --build (only needed for first-time build)
```

```bash
docker-compose up (for subsequent runs or after making changes to DockerFile)
```

The app should be accessible on localhost:3001

## Without Docker

Step 1: Add env variables in the .env file to bash

Step 2: From the root dir install node_modules

```bash
yarn install
```

Step 3: Start the CORS server

```bash
yarn start-cors
```

Step 4: Start the app

```bash
yarn start-app
```

## Tests

To run tests:

```bash
yarn test
```

from the root or /client dir.

## Things that can still be improved:

- Add more tests. At the moment there are only snapshot tests.
- Improve the UI.
- Browser compatibility: currently only officially tested for Chrome Version 79.0.3945.130.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT
