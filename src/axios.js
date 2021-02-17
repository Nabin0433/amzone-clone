import axios from 'axios';


const instance = axios.create({
  baseURL: "http://localhost:5001/project-amazop/us-central1/api", // the API (cloud fuction ) url
});

export default instance;




