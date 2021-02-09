import { createSelector } from 'reselect';
import { IUserState } from './user.types';

export const userSelector = (state: any) => state.user;

export const usersSelector = createSelector(
  userSelector,
  (user: IUserState) => user.users,
);

export const usersStateSelector = createSelector(
  userSelector,
  (user: IUserState) => user.usersState,
);

export const usersErrorSelector = createSelector(
  userSelector,
  (user: IUserState) => user.usersError,
);

export const userDetailsSelector = createSelector(
  userSelector,
  (user: IUserState) => user.userDeatils,
);

export const userDetailsStateSelector = createSelector(
  userSelector,
  (user: IUserState) => user.userDeatilsState,
);

export const userDetailsErrorSelector = createSelector(
  userSelector,
  (user: IUserState) => user.userDeatilsError,
);