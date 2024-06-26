import axios from "axios"

const apiUrl = import.meta.env.VITE_APIURL
console.log("🚀 ~ apiUrl:", apiUrl);

const axiosClient = axios.create({
  baseURL: apiUrl,
})

export default axiosClient