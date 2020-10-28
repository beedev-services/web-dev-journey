import axios from "axios"

const axiosWithAuth = () => {
  const token = localStorage.getItem("token")

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://beedev-blog-api.herokuapp.com/api",

  });
};

export default axiosWithAuth;
////

import axios from 'axios'

export const axiosWithAuth = () => {
  // Set token in local storage
  const token = localStorage.getItem("token");
  return axios.create({
    //pass token through header
    headers: {
      Authorization: token,
    },
    //set base url for easier requests
    baseURL: "https://beedev-blog-api.herokuapp.com/api",
  });
};

