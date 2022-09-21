import axiosClient from "./axiosClient";
const url = '/users';
const userApi = {
  getAll: (url, params) => {

    return axiosClient.get(url, params);
  },
  get: (id) => {

    return axiosClient.get(url);
  },
  login: (params) => {

    return axiosClient.post(url, { params });
  },
  getUser: () => {
    const url = '/user';
    return axiosClient.get(url);
  },
  add: (params) => {
    return axiosClient.post(url, params);
  }
};

export default userApi;