import axios, { AxiosResponse } from "axios";

const devBaseURL = "http://127.0.0.1:3000";
// const devBaseURL = "http://127.0.0.1:3001";
// const devBaseURL = "http://127.0.0.1:3000";
const proBaseURL = "http://192.168.31.32:7001";
const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

// 进行一些全局配置
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 5000;
// axios.defaults.withCredentials = true; // 让axios发送请求的时候带上cookie

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 封装自己的get/post方法
const Network = {
  get: function (path = "", data = {}): Promise<AxiosResponse<any>> {
    return new Promise(function (resolve, reject) {
      axios
        .get(path, {
          params: data,
        })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  post: function (path = "", data = {}): Promise<AxiosResponse<any>> {
    return new Promise(function (resolve, reject) {
      axios
        .post(path, data)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  delete: function (path = "", data = {}): Promise<AxiosResponse<any>> {
    return new Promise(function (resolve, reject) {
      axios
        .delete(path, { data: data })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  put: function (path = "", data = {}): Promise<AxiosResponse<any>> {
    return new Promise(function (resolve, reject) {
      axios
        .put(path, data)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
};
export default Network;
