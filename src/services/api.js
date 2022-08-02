import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/phpmyadmin/index.php?route=/sql&server=1&db=CRUD&table=",
});

export default api;