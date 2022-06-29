import {
  SHORT_MOVIE_DURATION,
  MOBILE_WIDTH,
  TABLET_WIDTH,
  MOBILE_CARDS_COUNT,
  TABLET_CARDS_COUNT,
  DESKTOP_CARDS_COUNT
} from './constants';

export function getLayout(width) {
  let layout = null;
  if (width > 0) {
    layout = 'mobile'; 
  }
  if (width > MOBILE_WIDTH) {
    layout = 'tablet'; 
  }
  if (width > TABLET_WIDTH) {
    layout = 'desktop'; 
  }
  return layout;
}

export function getDisplayedCount(layout) {
  switch (layout) {
    case 'desktop':
      return DESKTOP_CARDS_COUNT;
    case 'tablet':
      return TABLET_CARDS_COUNT;
    case 'mobile':
      return MOBILE_CARDS_COUNT;
    default:
      return DESKTOP_CARDS_COUNT;
  }
}

export function filterByQuery(data, query) {
  return data.filter(item => item.nameRU?.toLowerCase().includes(query?.toLowerCase())
  || item.nameEN?.toLowerCase().includes(query?.toLowerCase()));
};

export function filterByCheckbox(data, shortsOnly) {
  return shortsOnly ? data.filter(item => item.duration <= SHORT_MOVIE_DURATION) : data;
};

export function parseMoviesData(data) {
  return data?.map(item => {
    return {
      country: item.country,
      description: item.description,
      director: item.director,
      duration: item.duration,
      image: `https://api.nomoreparties.co${item.image.url}`,
      movieId: item.id,
      nameEN: item.nameEN,
      nameRU: item.nameRU,
      thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
      trailer: item.trailerLink,
      year: item.year
    }
  });
}

export function findSaved(instance, list) {
  return list?.find(item => instance.movieId === item.movieId);
}

export function convertDuration(duration) {
  if (duration < 60) return `${duration % 60}м`;
  if (duration === 60) return '1ч';
  if (duration > 60) return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
}

export function setObjectValues(object, value) {
  return Object.keys(object).reduce((obj, field) => {
    obj[field] = value;
    return obj;
  }, {});
}
