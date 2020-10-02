import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:4000/api/",
    headers: {
      Authorization: `bearer ${token}`
    },
  });
};

export default axiosWithAuth;


