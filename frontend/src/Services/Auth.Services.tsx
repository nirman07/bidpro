import axios from "axios";

const API_URL = "localhost:3000/api/v1/users/";

const register = (email:string, password:string) => {
  return axios.post(API_URL + "register", {
    email,
    password,
  });
};

const login = (email:string, password:string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export default {
    register,
    login,  
};