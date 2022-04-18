import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { useHistory } from "react-router-dom";

export const getToken = async (data) => {
  const resultLogin = await axios
    .post(`${baseUrl}login`, data)
    .then((promiseData) => promiseData.data)
    .then((resolve) => resolve.result)
    .catch();
  return resultLogin;
};

const history = useHistory;

//signupFrom API - 회원가입
export const insertSignupForm = (data) => {
  const result = axios.post(baseUrl + "signupInsert", data);
  return result;
};
