export function loadMovies() {
  const moviesString = window.localStorage.getItem("movies");
  const movies = moviesString ? JSON.parse(moviesString) : [];
  return movies;
}

export function saveMovie(movie) {
  let movies = loadMovies();
  movies = [...movies, movie];
  window.localStorage.setItem("movies", JSON.stringify(movies));
}

export function updateMovie(id, updated) {
  let movies = loadMovies();
  const index = movies.findIndex(movie => movie.id === id);
  const movie = movies[index];
  movies = [
    ...movies.slice(0, index),
    Object.assign({}, movie, updated),
    ...movies.slice(index + 1)
  ];
  window.localStorage.setItem("movies", JSON.stringify(movies));
}

export function deleteMovie(id) {
  let movies = loadMovies();
  const index = movies.findIndex(movie => movie.id === id);
  movies = [...movies.slice(0, index), ...movies.slice(index + 1)];
  window.localStorage.setItem("movies", JSON.stringify(movies));
}
