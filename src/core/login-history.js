import store from 'store';

const REMEMBER_LOGIN_KEY = 'auth0:lock:last-login';

export const setLastLogin = (connection, username) =>
  store.set(REMEMBER_LOGIN_KEY, { connection, username });
export const getLastLogin = () => store.get(REMEMBER_LOGIN_KEY);
