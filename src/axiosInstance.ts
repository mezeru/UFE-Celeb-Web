import axios from "axios";

const backend = axios.create({
    baseURL: process.env.BACKURL,
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  });
