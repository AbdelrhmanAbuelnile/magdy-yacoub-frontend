import axiosClient from "./axiosClient";

const login = async(data) => axiosClient.post("/login",data)

const signup = async(data) => axiosClient.post("/signup",data)

export default {
  login,
  signup
}