const fs = require('fs');
const uuid = require('uuid');
const movies = require('./movies.json');

const getAll = (req, res) => {
    res.json(movies);
};

const getById = (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);

    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
};

const getPaged = (req, res) => {
    const page = req.params.page;
    const limit = 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const resultMovies = movies.slice(startIndex, endIndex);

    res.json(resultMovies);
};

const getByQueryParams = (req, res) => {
    const { title, year, genre, director, rate } = req.query;
    let resultMovies = [...movies];

    if (title) {
        resultMovies = resultMovies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (year) {
        resultMovies = resultMovies.filter(movie => movie.year == year);
    }
    if (genre) {
        resultMovies = resultMovies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
    }
    if (director) {
        resultMovies = resultMovies.filter(movie => movie.director.toLowerCase().includes(director.toLowerCase()));
    }
    if (rate) {
        resultMovies = resultMovies.filter(movie => movie.rate >= rate);
    }
    console.log(resultMovies)
    res.json(resultMovies);

};

const post = (req, res) => {
    const newMovie = {
        id: uuid.v4(),
        ...req.body
    };

    movies.push(newMovie);
    fs.writeFileSync('./movies.json', JSON.stringify(movies, null, 2));

    res.json(newMovie);
};

const put = (req, res) => {
    const { id } = req.params;
    const { title, year, genre, director, rate } = req.body;

    const index = movies.findIndex(movie => movie.id === id);

    if (index !== -1) {
        if (title) movies[index].title = title;
        if (year) movies[index].year = year;
        if (genre) movies[index].genre = genre;
        if (director) movies[index].director = director;
        if (rate) movies[index].rate = rate;

        fs.writeFileSync('./movies.json', JSON.stringify(movies, null, 2));

        res.json(movies[index]);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
};

const deleteMovie = (req, res) => {
    const { id } = req.params;

    const index = movies.findIndex(movie => movie.id === id);

    if (index !== -1) {
        const deletedMovie = movies.splice(index, 1);

        fs.writeFileSync('./movies.json', JSON.stringify(movies, null, 2));

        res.json(deletedMovie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
};

module.exports = {
    getAll,
    getById,
    getPaged,
    getByQueryParams,
    post,
    put,
    delete: deleteMovie
};
