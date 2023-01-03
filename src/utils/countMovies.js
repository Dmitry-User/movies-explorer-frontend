const getFirstCountToView = (width) => {
  if (width > 928) return 12;
  if (width < 645) return 5;
  return 8;
};

const getMore = (width) => {
  if (width > 928) return 3;
  return 2;
};

export { getFirstCountToView, getMore };
