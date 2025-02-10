const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 },
];

// Render movies dynamically on the page and log details
const renderMovies = (movieList) => {
    const container = document.getElementById('movies-container');
    container.innerHTML = '';
    console.log("Rendering Movies List:");

    movieList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <h3>${movie.title}</h3>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Release Year:</strong> ${movie.releaseYear}</p>
        `;
        container.appendChild(movieCard);

        // Detailed log of movie details using template literals
        console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
    });

    if (movieList.length === 0) {
        console.log("No movies available to display.");
    }
};

const addMovie = (collection, movie) => {
    collection.push(movie);
};

document.getElementById('movie-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const releaseYear = parseInt(document.getElementById('releaseYear').value);

    const newMovie = { title, genre, rating, releaseYear };
    addMovie(movies, newMovie);

    console.log(`Added movie: ${newMovie.title} (${newMovie.releaseYear}).`);
    renderMovies(movies);
    e.target.reset();
});

document.getElementById('filter-genre-btn').addEventListener('click', () => {
    const genre = document.getElementById('filter-genre').value;
    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    console.log(`Filtering movies by genre: ${genre}`);
    renderMovies(filteredMovies);
});

document.getElementById('filter-year-btn').addEventListener('click', () => {
    const year = parseInt(document.getElementById('filter-year').value);
    const filteredMovies = movies.filter(movie => movie.releaseYear > year);
    console.log(`Filtering movies released after year: ${year}`);
    renderMovies(filteredMovies);
});

document.getElementById('highest-rated').addEventListener('click', () => {
    const highestRated = movies.reduce((best, movie) => (movie.rating > best.rating ? movie : best), movies[0]);
    console.log(`Highest-rated movie: ${highestRated.title} (${highestRated.rating})`);
    renderMovies([highestRated]);
});

renderMovies(movies);