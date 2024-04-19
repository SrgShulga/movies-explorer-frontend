const BASE_URL = 'https://api.movies.explorer.nomoredomainswork.ru';
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const DEVICE_WIDTHS = {
  desktop: {
    width: 917, cards: { total: 16, more: 4, },
  },
  tablet: {
    width: 583, cards: { total: 8, more: 2, },
  },
  mobile: {
    width: 583, cards: { total: 5, more: 2, },
  },
};

export {
  BASE_URL,
  MOVIES_URL,
  DEVICE_WIDTHS
}