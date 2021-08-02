import axios from "axios";

export class ApiService {

  getUsers = () => {

    return axios.get("https://randomuser.me/api/?results=50");
    
  };
}
