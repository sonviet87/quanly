import axiosClient from "./axiosClient";
const url = '/manager';
const managerApi = {
    getAll: (params) => {

        return axiosClient.get(url, { params });
    },

};

export default managerApi;