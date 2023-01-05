import {
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT,
  QUANTITY_FOR_LARGE_VIEWPORT,
  QUANTITY_FOR_MEDIUM_VIEWPORT,
  QUANTITY_FOR_SMALL_VIEWPORT,
  ADDITIONAL_QUANTITY_FOR_LARGE_VIEWPORT,
  ADDITIONAL_QUANTITY_FOR_OTHER_VIEWPORT,
} from "./constants";

const getQuantityMovies = (width) => {
  if (width > MEDIUM_VIEWPORT) return QUANTITY_FOR_LARGE_VIEWPORT;
  if (width < SMALL_VIEWPORT) return QUANTITY_FOR_SMALL_VIEWPORT;
  return QUANTITY_FOR_MEDIUM_VIEWPORT;
};

const getAdditionalMovies = (width) => {
  if (width > MEDIUM_VIEWPORT) return ADDITIONAL_QUANTITY_FOR_LARGE_VIEWPORT;
  return ADDITIONAL_QUANTITY_FOR_OTHER_VIEWPORT;
};

export { getQuantityMovies, getAdditionalMovies };
