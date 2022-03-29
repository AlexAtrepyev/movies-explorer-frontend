export const dataTemplate = {
  initial: null,
  liveQuery: '',
  stableQuery: '',
  shortsOnly: false,
  searched: null
}

export function filterByQuery(data, query) {
  return data.filter(item => item.nameRU?.toLowerCase().includes(query?.toLowerCase())
  || item.nameEN?.toLowerCase().includes(query?.toLowerCase()));
};

export function filterByCheckbox(data, shortsOnly) {
  return shortsOnly ? data.filter(item => item.duration <= 40) : data;
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
