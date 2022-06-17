import axios from "axios";

const API_URL = "http://localhost:3532/api/v1/";

const register = (user:any) => {
  return axios.post(API_URL + "users/register", user);
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

const getRoles = ()=> {
    return new Promise((resolve,reject)=>{
       axios.get(API_URL + "master/getRole").then((data)=>{
        resolve(data)
       }).catch((err)=>{
        reject(err)
       });
    })
};

const getCategories = ()=> {
  return new Promise((resolve,reject)=>{
     axios.get(API_URL + "master/getCategory").then((data)=>{
      resolve(data)
     }).catch((err)=>{
      reject(err)
     });
  })
};

export default {
    register,
    login,
    getRoles,
    getCategories
};