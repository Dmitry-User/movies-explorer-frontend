const BASE_URL = 'https://api.moviexplorers.nomoredomains.club';
const BASE_URL_BEATFILM = 'https://api.nomoreparties.co';
const ERR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const NOT_FOUND_MESSAGE = 'Ничего не найдено';
const SUCCESSFUL_UPDATE_USER_MESSAGE = 'Данные пользователя успешно обновлены';
const MAX_DURATION_SHORT_MOVIE = 40;
const EMAIL_REGEX = "^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$";
const NAME_REGEX = "^[A-Za-zА-Яа-яЁё\\s\\-]*$";
const MEDIUM_VIEWPORT = 928;
const SMALL_VIEWPORT = 645;
const QUANTITY_FOR_LARGE_VIEWPORT = 12;
const QUANTITY_FOR_MEDIUM_VIEWPORT = 8;
const QUANTITY_FOR_SMALL_VIEWPORT = 5;
const ADDITIONAL_QUANTITY_FOR_LARGE_VIEWPORT = 3;
const ADDITIONAL_QUANTITY_FOR_OTHER_VIEWPORT = 2;

const registerContent = {
  pageTitle: 'Добро пожаловать!',
  pageText: 'Уже зарегистрированы?',
  linkText: 'Войти',
  linkPath: '/signin',
};

const loginContent = {
  pageTitle: 'Рады видеть!',
  pageText: 'Ещё не зарегистрированы?',
  linkText: 'Регистрация',
  linkPath: '/signup',
};

const pathsForHeader = [
  '/',
  '/movies',
  '/saved-movies',
  '/profile',
];

const pathsForFooter = [
  '/',
  '/movies',
  '/saved-movies',
];

export {
  BASE_URL,
  BASE_URL_BEATFILM,
  ERR_MESSAGE,
  NOT_FOUND_MESSAGE,
  SUCCESSFUL_UPDATE_USER_MESSAGE,
  MAX_DURATION_SHORT_MOVIE,
  EMAIL_REGEX,
  NAME_REGEX,
  MEDIUM_VIEWPORT,
  SMALL_VIEWPORT,
  QUANTITY_FOR_LARGE_VIEWPORT,
  QUANTITY_FOR_MEDIUM_VIEWPORT,
  QUANTITY_FOR_SMALL_VIEWPORT,
  ADDITIONAL_QUANTITY_FOR_LARGE_VIEWPORT,
  ADDITIONAL_QUANTITY_FOR_OTHER_VIEWPORT,
  loginContent,
  registerContent,
  pathsForHeader,
  pathsForFooter,
};
