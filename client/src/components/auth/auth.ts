import axios from "../../axios/axios";

const AUTH_URL = "/api/users/auth";

export const Auth = () => {
  axios.get(AUTH_URL).then((response) => {
    console.log(response.data);
  });
};

export default Auth;
