import axios from "axios"

const apiUrl = "http://localhost:5000/"
console.log("🚀 ~ apiUrl:", apiUrl);

const axiosClient = axios.create({
  baseURL: apiUrl,
})

export default axiosClient