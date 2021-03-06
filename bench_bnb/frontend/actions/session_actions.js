import * as SessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const login = (user) => dispatch => {
  return SessionUtil.login(user).then(user => dispatch(receieveCurrentUser(user)))
};

export const logout = () => dispatch => {
  return SessionUtil.logout().then(() => dispatch(logoutCurrentUser()))
};

export const signup = (user) => dispatch => {
  return SessionUtil.signup(user).then(user => dispatch(receieveCurrentUser(user)))
};

export const receieveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
  })
};

export const logoutCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER,
  })
};

export const receiveErrors = (errors = []) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
  })
};