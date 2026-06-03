import axios from "axios";

let rerequest = true
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
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstence.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config
    
    if ((error.request.status == 401) && (!originalRequest.retry)&& rerequest){
      originalRequest.retry = true
      rerequest = false
      const refreshToken = localStorage.getItem("refreshToken")
      try{
      const response =await axiosInstence.post("/token/refresh/",{refresh:refreshToken})
      localStorage.setItem("accessToken",response.data.access)
      originalRequest.headers["Authorization"] = `Bearer ${response.data.access}`;
      return axiosInstence(originalRequest)
    }
    catch(error){
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      window.location.href="/login"
    }
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstence;