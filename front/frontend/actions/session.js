import {postUser, deleteSession, postSession} from '../utils/session';

// If we spell something wrong in the reducer it won't give us an
//error for that, it's going to pretend it didn't have  match and error would be hard to debug. 
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch => postUser(formUser)
.then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
.then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
.then(() => dispatch(logoutCurrentUser()));