function filterShortMovies(movies) {
  return movies.filter(movie => movie.duration < 40);
}

function validateMovieData(movies) {
  movies.forEach(movie => {
    if (!movie.image) {
      movie.image = 'https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
      movie.thumbnail = 'https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    } else {
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
      movie.image = `https://api.nomoreparties.co${movie.image.url}`
    }
    if (!movie.country) {
      movie.country = 'Russia';
    }
    if (!movie.nameEN) {
      movie.nameEN = movie.nameRU;
    }
  });
  return movies
}

function filterMovies(movies, userQuery, shortMoviesCheckbox) {
  const moviesByUserQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = userQuery.toLowerCase().trim();
    return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
  });

  if (shortMoviesCheckbox) {
    return filterShortMovies(moviesByUserQuery);
  } else {
    return moviesByUserQuery;
  }
}

function transformDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
}

export {
  validateMovieData,
  filterShortMovies,
  transformDuration,
  filterMovies,
}