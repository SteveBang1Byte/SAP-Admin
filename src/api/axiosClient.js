import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://dev-protocol.jframework.live',
    headers: {
      'content-type': 'application/json',
    },
    // paramsSerializer: (params) => queryString.stringify(params),
  });

  export default axiosClient;