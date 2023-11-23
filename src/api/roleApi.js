import axiosClient from "./axiosClient";

const roleApi = {
  create(role) {
    const url = `api/roles`;
    return axiosClient.post(url, role);
  },

  edit(id, role) {
    const url = `api/roles/${id}`;
    return axiosClient.put(url, role);
  },

  getById(id) {
    const url = `api/roles/${id}`;
    return axiosClient.get(url);
  },

  getAll() {
    const url = `api/roles`;
    return axiosClient.get(url);
  },

  getPermissions(id) {
    const url = `api/roles/${id}/permissions`;
    return axiosClient.get(url);
  },

  assignPermission(roleId, permissionId) {
    const url = `api/roles/${roleId}/permissions/${permissionId}`;
    return axiosClient.post(url);
  },

  revokePermissionByRole(roleId, permissionId) {
    const url = `api/roles/${roleId}/permissions/${permissionId}`;
    return axiosClient.delete(url);
  },

  getUsers(id) {
    const url = `api/roles/${id}/users`;
    return axiosClient.get(url);
  },


};

export default roleApi;
