// Axios is fetching library
// Allows us to interact easily with the APIs
import axios from "axios";

const instance = axios.create({
  // The API (Cloud Functions) URL
  baseURL: "https://us-central1-scholar-store.cloudfunctions.net/api",
  // "http://localhost:5001/scholar-store/us-central1/api",
}); 

export default instance;
