import axios from "axios";

const API_URL = "http://localhost:3532/api/v1/";


const getProfileData= () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL + "users/getUser")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getItemData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL + "items/getItem")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

function isAuthorized() {
  let user= localStorage.getItem("user");
  let key = localStorage.getItem("accessToken")
  if(user && key)
    return true
  else
    return false
}


export default {

  getProfileData,
  getItemData,
  isAuthorized
};
