# Movie API

This is a simple Node.js API for a fake movie database. The database is a JSON file with 50 movies. Each movie has a title, year, genre, director, rate, and a random UUID as an id.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download Node.js [here](https://nodejs.org/en/download/) and npm is included in the installation.

### Installing

Clone the repository to your local machine.

```
git clone https://github.com/yourusername/movie-api.git
```

Navigate into the project directory.

```
cd movie-api
```

Install the project dependencies.

```
npm install
```

Start the server.

```
npm start
```

The server will start on port 3000. You can access the API through `http://localhost:3000`.

## API Endpoints

- GET `/movies`: Get all movies
- GET `/movies/page/:page`: Get movies by page (10 movies per page)
- GET `/movies/search`: Get movies by query parameters (title, year, genre, director, rate)
- POST `/movies`: Add a new movie
- PUT `/movies/:id`: Update a movie by id
- DELETE `/movies/:id`: Delete a movie by id

All requests must include the API key in the header. The key is `x-api-key` and the value is `YOUR_API_KEY`.

## Swagger Documentation

You can access the Swagger documentation at `http://localhost:3000/api-docs`.

## Running the tests

Currently, there are no tests for this project.

## Built With

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [uuid](https://www.npmjs.com/package/uuid)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)

## Authors

- Your Name

## License

This project is licensed under the ISC License.
