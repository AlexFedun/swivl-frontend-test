import {
  IUser,
  IUserDeatils,
  USERS_GET,
  USERS_GET_ERROR,
  USERS_GET_SUCCESS,
  USER_DETAILS_GET,
  USER_DETAILS_GET_ERROR,
  USER_DETAILS_GET_SUCCESS,
} from './user.types';

export const usersGet = (limit: number, offset: number) => ({
  type: USERS_GET,
  payload: {
    limit,
    offset,
  }
});

export const usersGetSuccess = (users: IUser[]) => ({
  type: USERS_GET_SUCCESS,
  payload: users,
});

export const usersGetError = (error: any) => ({
  type: USERS_GET_ERROR,
  payload: error,
});

export const usersDetailsGet = (usernmae: string) => ({
  type: USER_DETAILS_GET,
  payload: usernmae,
});

export const usersDetailsGetSuccess = (details: IUserDeatils) => ({
  type: USER_DETAILS_GET_SUCCESS,
  payload: details,
});

export const usersDetailsGetError = (error: any) => ({
  type: USER_DETAILS_GET_ERROR,
  payload: error,
});
