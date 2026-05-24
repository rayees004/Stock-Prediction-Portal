import axios from "axios";


const baseURL=import.meta.env.VITE_BACKEND_BASE_API

const axiosInstence = axios.create({
    baseURL:baseURL
}

    
)

axiosInstence.interceptors.request.use(
  function (config){
    // Do something before request is sent
    const accessToken = localStorage.getItem("accessToken")
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["Content-Type"] = "application/json"
    console.log("configdata",config)
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default axiosInstence;