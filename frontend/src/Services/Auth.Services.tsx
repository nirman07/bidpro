import axios from "axios";

const API_URL = "http://localhost:3532/api/v1/";

const register = (user: any) => {
  return axios.post(API_URL + "users/register", user);
};
const item = (user: any) => {
  return axios.post(API_URL + "items/item", user);
};
const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "users/login", {
      email,
      password,
    })
    .then((response) => {
      let userData= response.data;
      console.log(userData);
      
      if (userData.data.accessToken) {
        localStorage.setItem(
          "token",
          JSON.stringify(`Bearer ${userData.data.accessToken}`)
        );
      }
      if (userData.data.userData) {
        localStorage.setItem("users", JSON.stringify(userData.data.userData));
      }
      return userData;
    });
};
const getRoles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL + "master/getRole")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getCategories = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL + "master/getCategory")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {
  register,
  login,
  item,
  getRoles,
  getCategories,
};
