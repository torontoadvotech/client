import { UserAuth } from './types';

class API {
  prefix = 'http://localhost:8000';
  apiVersion = '/api/v1';

  // Signup
  async signup({ fullName, email, password, passwordConfirm, role }: UserAuth) {
    return this.request('post', '/users/signup', {
      name: fullName,
      email,
      password,
      passwordConfirm,
      role
    });
  }

  // Login
  async login({ email, password }: UserAuth) {
    return this.request('post', '/users/login', {
      email,
      password
    });
  }

  // Logout current user
  async logout() {
    return this.request('get', '/users/logout');
  }

  // Refresh token POST request
  // This request uses the refresh token stored as an http-only cookie to request a new authorization token
  // The authorization token is only ever stored in memory and is used to authenticate the user is able to access a protected route. (eg. update user details)
  async refreshToken() {
    return this.request('post', '/users/refreshToken');
  }

  // Get current user's user data
  async getMe() {
    return this.request('get', '/users/getMe');
  }

  // Get current user's session data
  async getMySessions(JWT: string) {
    return this.request('get', '/sessions/mySessions', undefined, JWT);
  }

  // async getSessions(role: string, id: string, JWT: string) {
  //   return this.request('get', `/${role}s/${id}/sessions`, undefined, JWT);
  // }

  // API function used to make requests
  private async request(
    type: 'get' | 'post' | 'patch',
    url: string,
    data?: object,
    JWT?: string
  ) {
    // Request headers
    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${JWT}`
    };

    const raw = JSON.stringify(data);

    try {
      let res: any;
      // GET REQUEST
      if (type === 'get') {
        res = await fetch(`${this.prefix}${this.apiVersion}${url}`, {
          method: 'GET',
          credentials: 'include',
          headers
        });
      }

      // POST REQUEST
      if (type === 'post') {
        res = await fetch(`${this.prefix}${this.apiVersion}${url}`, {
          method: 'POST',
          body: raw,
          credentials: 'include',
          headers
        });
      }

      // PATCH REQUEST
      if (type === 'patch') {
        res = await fetch(`${this.prefix}${this.apiVersion}${url}`, {
          method: 'PATCH',
          body: raw,
          credentials: 'include',
          headers
        });
      }
      const data = await res.json();

      return data;
    } catch (error) {
      return null;
    }
  }
}

export default new API();
