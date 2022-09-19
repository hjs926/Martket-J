import axios from "../../axios/axios";

const AUTH_URL = "/api/users/auth";

export const Auth = async () => {
  const response = await axios.get(AUTH_URL);
  const data = response.data;

  return data;
};

export default Auth;
