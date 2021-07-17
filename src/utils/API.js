import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50&nat=us";

export default {
  getRandomEmployee: function () {
    return axios.get(BASEURL);
  },
};
