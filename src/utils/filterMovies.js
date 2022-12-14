import { MAX_DURATION_SHORT_MOVIE } from "./constants";

const searchMovies = (items, value) => {
  if (items.length === 0 || !value) return items;
  const convertedValue = value.toLowerCase();
  return items.filter((item) => item.nameRU?.toLowerCase().includes(convertedValue) || item.nameEN?.toLowerCase().includes(convertedValue));
};

const filterMovies = (items, check) => {
  if (items.length === 0 || !check) return items;
  return items.filter((item) => item.duration <= MAX_DURATION_SHORT_MOVIE);
}

export { searchMovies, filterMovies };
