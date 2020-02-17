FlickrApp

FlickrApp is a react app for searching feeds on flickr.

The demo app is hosted on: [Named Link](https://flickrapp-demo.herokuapp.com "Named link title")

Installation and Usage

After cloning the repository with:

git clone https://github.com/abhisat/FlickrApp.git

Dependencies to run the app locally: Docker

Step 1: Install Docker

Here is a link on how to install Docker:
https://docs.docker.com/install/

Step 2: Run the docker build/run command from the root dir

yarn dev-build (only needed for first-time build)

yarn dev-start (for subsequent runs or after making changes to DockerFile)

The app should be accessible on localhost:3001

Tests

To run tests: Run

yarn test
from the root or /client dir.

Things that can still be improved:

- Add more tests. At the moment there are only snapshot tests and a mockserver sert up to test API requests.
- Improve the UI.
- Browser compatibility: currently only officially tested for Chrome Version 79.0.3945.130.

Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License

MIT
