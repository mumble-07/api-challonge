import axios from "axios";

const Instance = axios.create({
  baseURL: "https://api.challonge.com/v2/",

  headers: {
    "Content-Type": "application/vnd.api+json",
    "Accept": "application/json",
    "Authorization-Type": "v1",
    "Authorization": "AUTHORIZATION KEY",
  },
});

export default Instance;
