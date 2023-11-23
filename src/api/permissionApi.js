import axiosClient from "./axiosClient";
const baseEndpoint = "api/permissions";
const permissionApi = {
  create(permission) {

    return axiosClient.post(baseEndpoint, permission);
  },

  edit(id, permission) {
    const url = `${baseEndpoint}/${id}`;
    return axiosClient.put(url, permission);
  },

  getById(id) {
    const url = `${baseEndpoint}/${id}`;
    return axiosClient.get(url);
  },

  getAll(params) {

    return axiosClient.get(baseEndpoint, {
        params: params,
    });
  },

//   getPermissions(id) {
//     const url = `api/roles/${id}/permissions`;
//     return axiosClient.get(url);
//   },

//   revokePermissionByRole(roleId, permissionId) {
//     const url = `api/roles/${roleId}/permissions?permissionIds=${permissionId}`;
//     return axiosClient.delete(url);
//   },

//   getUsers(id) {
//     const url = `api/roles/${id}/users`;
//     return axiosClient.get(url);
//   },


};

export default permissionApi;
