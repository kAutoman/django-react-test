import Axios from "axios";


export const setAuthToken = (token:any) => {
    if (token) {
        Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete Axios.defaults.headers.common["Authorization"];
 }
 
 export const authHeader = () => {
    const accessToken = sessionStorage.getItem('token');

    if (accessToken) {
      return { Authorization: 'Bearer ' + accessToken };
    } else {
      return {};
    }
  }