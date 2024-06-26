import axios from "axios"

const apiUrl = "https://magdy-yacoub-backend.vercel.app/"
console.log("🚀 ~ apiUrl:", apiUrl);

const axiosClient = axios.create({
  baseURL: apiUrl,
})

export default axiosClient