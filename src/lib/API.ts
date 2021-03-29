import { EventsFormTypes, UserType } from './types';

class API {
  prefix = 'http://localhost:8000';
  apiVersion = '/api/v1';

  // Signup
  async signUp({
    name,
    email,
    password,
    passwordConfirm,
    role,
  }: Partial<UserType>) {
    return this.request('post', '/users/signup', {
      name,
      email,
      password,
      passwordConfirm,
      role,
    });
  }

  // Login
  async login({ email, password }: Partial<UserType>) {
    return this.request('post', '/users/login', {
      email,
      password,
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
    return this.request('get', '/users/refreshToken');
  }

  // Get current user's user data
  async getMe() {
    return this.request('get', '/users/getMe');
  }

  // Get current user's session data
  async getMySessions(JWT: string) {
    return this.request('get', '/sessions/mySessions', undefined, JWT);
  }

  // Get one Session's data
  // async getSessionInfo(sessionId: string) {
  //   return this.request("get", )
  // }

  async approveSession(accepted: boolean, sessionId: string, JWT: string) {
    return this.request(
      'patch',
      `/sessions/sessionResponse/${sessionId}`,
      { accepted },
      JWT
    );
  }

  async cancelSession(sessionId: string, JWT: string) {
    return this.request(
      'patch',
      `/sessions/cancelSession/${sessionId}`,
      undefined,
      JWT
    );
  }

  // Edit profile
  async editMyProfile(body: FormData, JWT: string) {
    return this.request('patch', '/users/updateMe', body, JWT);
  }

  // Get all mentors
  async getAllMentors(page: number, limit: number) {
    return this.request('get', `/mentors?page=${page}&limit=${limit}`);
  }

  // Events Form
  async EventsFormSubmit(body: EventsFormTypes) {
    return true;
  }

  // Validate email
  async validateEmail(id: string) {
    return this.request('patch', `/users/validateEmail/${id}`);
  }

  // API function used to make requests
  private async request(
    type: 'get' | 'post' | 'patch',
    url: string,
    data?: object,
    JWT?: string
  ) {
    // Request headers
    const headers: HeadersInit = {
      authorization: `Bearer ${JWT}`,
    };

    // Handle when a FormData object is passed as the body or when a raw object is passed
    let body;

    if (data && data instanceof FormData) {
      body = data;
    } else if (data) {
      body = JSON.stringify(data);
      headers['Content-Type'] = 'application/json';
    }

    try {
      let res: any;
      // GET REQUEST
      if (type === 'get') {
        res = await fetch(`${this.prefix}${this.apiVersion}${url}`, {
          method: 'GET',
          credentials: 'include',
          headers,
        });
      }

      // POST REQUEST
      if (type === 'post') {
        res = await fetch(`${this.prefix}${this.apiVersion}${url}`, {
          method: 'POST',
          body,
          credentials: 'include',
          headers,
        });
      }

      // PATCH REQUEST
      if (type === 'patch') {
        res = await fetch(`${this.prefix}${this.apiVersion}${url}`, {
          method: 'PATCH',
          body,
          credentials: 'include',
          headers,
        });
      }
      const json = await res.json();

      return json;
    } catch (error) {
      return null;
    }
  }
}

export default new API();
