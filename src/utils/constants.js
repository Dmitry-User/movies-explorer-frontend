const BASE_URL = 'https://api.nomoreparties.co';

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

const errMessage = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export { BASE_URL, loginContent, registerContent, pathsForHeader, pathsForFooter, errMessage };
