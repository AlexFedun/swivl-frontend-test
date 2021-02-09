import HttpService from './http.service';

class UserAPI extends HttpService {
  USERS_API = 'users';

  getUsers = (limit: number, offset: number) => {
    return this.get(this.USERS_API, {
      per_page: limit,
      since: offset
    });
  };

  getUserDetails = (username: string) => {
    return this.get(`${this.USERS_API}/${username}`);
  };

}

export default new UserAPI();
