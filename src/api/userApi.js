import axiosClient from "./axiosClient";
const baseUrl = 'api/users';

const userApi = {

  authentication(username, password) {
    const url = `api/users/authenticate`;
    const payload = {
      brandUrl: "boostpte.com",
      username: username,
      password: password,
    };

    return axiosClient.post(url, payload);
  },

  registration(user) {
    const url = `${baseUrl}/registration`;
    return axiosClient.post(url, user);
  }
  

};

export default userApi;
