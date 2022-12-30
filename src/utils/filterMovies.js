const searchMovies = (items, value) => {
  if (items.length === 0) return items;
  const convertedValue = value.toLowerCase();
  return items.filter((item) => item.nameRU?.toLowerCase().includes(convertedValue) || item.nameEN?.toLowerCase().includes(convertedValue));
};

const filterMovies = (items, check) => {
  if (items.length === 0 || !check) return items;
  return items.filter((item) => item.duration <= 40);
}

export { searchMovies, filterMovies };
