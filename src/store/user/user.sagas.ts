import { all, call, put, takeLatest } from 'redux-saga/effects';
import UserAPI from '../../services/user.service';

import {
  UserDetailsGetAction,
  UsersGetAction,
  USERS_GET,
  USER_DETAILS_GET,
} from './user.types';

import {
  usersGetSuccess,
  usersGetError,
  usersDetailsGetSuccess,
  usersDetailsGetError,
} from './user.actions';

export function* getUser(action: UsersGetAction) {
  try {
    const user = yield call(UserAPI.getUsers, action.payload.limit, action.payload.offset);

    if (user) {
      yield put(usersGetSuccess(user));
    } else {
      yield put(usersGetError('Empty Response'));
    }
  } catch (err) {
    const { message } = err;
    yield put(usersGetError(message));
  }
}

export function* getUserDetails(action: UserDetailsGetAction) {
  try {
    const user = yield call(UserAPI.getUserDetails, action.payload);

    if (user) {
      yield put(usersDetailsGetSuccess(user));
    } else {
      yield put(usersDetailsGetError('Empty Response'));
    }
  } catch (err) {
    const { message } = err;
    yield put(usersDetailsGetError(message));
  }
}



export default function* root() {
  yield all([
    takeLatest(USERS_GET, getUser),
    takeLatest(USER_DETAILS_GET, getUserDetails),
  ]);
}
