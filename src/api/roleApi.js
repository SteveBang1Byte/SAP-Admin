import axiosClient from "./axiosClient";

const roleApi = {
  create(role) {
    const url = `api/roles`;
    return axiosClient.post(url, role);
  },

  getById(id) {
    const url = `api/roles/${id}`;
    return axiosClient.get(url);
  },

  getAll() {
    const url = `api/roles`;
    return axiosClient.get(url);
  },

};

export default roleApi;
