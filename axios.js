import axios from "axios";


//creating a axios object for API
const instance = axios.create({
    baseURL: `http://127.0.0.1:5001/clone-f0dc8/us-central1/api` //This is where API Comes (cloud function URL)
});

export default instance;