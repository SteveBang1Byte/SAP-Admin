import axiosClient from "./axiosClient";

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

};

export default userApi;
