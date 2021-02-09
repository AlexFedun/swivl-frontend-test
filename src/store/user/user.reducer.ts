import produce from 'immer';
import {
  IUserState,
  UserActionTypes,
  USERS_GET,
  USERS_GET_ERROR,
  USERS_GET_SUCCESS,
  USER_DETAILS_GET,
  USER_DETAILS_GET_ERROR,
  USER_DETAILS_GET_SUCCESS,
} from './user.types';

import { RequestState } from '../common.types';

const initialState: IUserState = {
  users: [],
  usersState: null,
  usersError: null,

  userDeatils: null,
  userDeatilsState: null,
  userDeatilsError: null,
};

const UserReducer = (state = initialState, action: UserActionTypes) =>
  produce(state, (draft: IUserState) => {
    switch (action.type) {
      case USERS_GET:
        draft.usersState = RequestState.Loading;
        break;
      case USERS_GET_ERROR:
        draft.usersState = RequestState.Error;
        draft.usersError = action.payload;
        break;
      case USERS_GET_SUCCESS:
        draft.usersState = RequestState.Success;
        draft.usersError = null;
        draft.users = action.payload;
        break;

      case USER_DETAILS_GET:
        draft.userDeatilsState = RequestState.Loading;
        break;
      case USER_DETAILS_GET_ERROR:
        draft.userDeatilsState = RequestState.Error;
        draft.userDeatilsError = action.payload;
        break;
      case USER_DETAILS_GET_SUCCESS:
        draft.userDeatilsState = RequestState.Success;
        draft.userDeatilsError = null;
        draft.userDeatils = action.payload;
        break;
    }
  });

export default UserReducer;
