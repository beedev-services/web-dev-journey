import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://beedev-blog-api.herokuapp.com/api",
    headers: {
      Authorization: `bearer ${token}`
    },
  });
};

export default axiosWithAuth;


