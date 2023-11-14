import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://dev-protocol.jframework.live',
    // baseURL: 'http://localhost:8080',
    headers: {
      'content-type': 'application/json',
    },
    // paramsSerializer: (params) => queryString.stringify(params),
  });

  export default axiosClient;