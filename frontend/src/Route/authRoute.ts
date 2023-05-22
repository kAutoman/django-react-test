import Axios from "axios";
import { setAuthToken } from "./AuthToken";

const loginURL = process.env.REACT_APP_PUBLIC_LOGIN_ENDPOINT as string;
const registerURL = process.env.REACT_APP_PUBLIC_REGISTER_ENDPOINT as string;

export const login = async (_email: string, _password: string) =>
{
  var request = {
    email: _email,
    password: _password,
  }

  await Axios.post(loginURL, request).then(response =>
  {
    //get token from response
    const token = response.data.token;
    if (token)
    {
      //set JWT token to session
      sessionStorage.setItem("token", token);
    }

    //set token to axios common header
    setAuthToken(token);

    //redirect user to profile page
    window.location.href = '/profile'
    return 'success';
  })
    .catch(err =>
    {
      //console.log(err)
      return 'failed'
    }
    );

  return '?';
}



export const register = async (_email: string, _password: string) =>
{
  var request = {
    email: _email,
    password: _password,
  }

  await Axios.post(registerURL, request).then(response =>
  {
    //get token from response
    const token = response.data.token;

    //set JWT token to session
    sessionStorage.setItem("token", token);

    //set token to axios common header
    setAuthToken(token);

    //redirect user to home page
    console.log(response);
  })
    .catch(err => console.log(err));
}

export const logout = async () =>
{
  sessionStorage.removeItem("token");
}
