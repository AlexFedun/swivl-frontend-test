import { RequestState } from '../common.types';

export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface IUserDeatils extends IUser {
  bio: string | null;
  blog: string;
  company: string;
  created_at: string;
  email: string | null;
  followers: number;
  following: number;
  hireable: string | null;
  location: string;
  name: string;
  public_gists: number;
  public_repos: number;
  twitter_username: string;
  updated_at: string;
}

export interface IUserState {
  users: IUser[];
  usersState: RequestState | null;
  usersError: string | null;

  userDeatils: IUserDeatils | null;
  userDeatilsState: RequestState | null;
  userDeatilsError: string | null;
}

export const USERS_GET = 'USERS_GET';
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS';
export const USERS_GET_ERROR = 'USERS_GET_ERROR';

export const USER_DETAILS_GET = 'USER_DETAILS_GET';
export const USER_DETAILS_GET_SUCCESS = 'USER_DETAILS_GET_SUCCESS';
export const USER_DETAILS_GET_ERROR = 'USER_DETAILS_GET_ERROR';

export interface UsersGetAction {
  type: typeof USERS_GET;
  payload: {
    limit: number;
    offset: number;
  }
}

export interface UsersGetSuccessAction {
  type: typeof USERS_GET_SUCCESS;
  payload: IUser[];
}

export interface UsersGetErrorAction {
  type: typeof USERS_GET_ERROR;
  payload: any;
}

export interface UserDetailsGetAction {
  type: typeof USER_DETAILS_GET;
  payload: string;
}

export interface UserDetailsGetSuccessAction {
  type: typeof USER_DETAILS_GET_SUCCESS;
  payload: IUserDeatils;
}

export interface UserDetailsGetErrorAction {
  type: typeof USER_DETAILS_GET_ERROR;
  payload: any;
}


export type UserActionTypes =
  | UsersGetAction
  | UsersGetSuccessAction
  | UsersGetErrorAction
  | UserDetailsGetAction
  | UserDetailsGetSuccessAction
  | UserDetailsGetErrorAction;
