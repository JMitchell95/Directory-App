import axios from "axios";

export default{

    generateEmployee: function () {
        return axios.get("https://randomuser.me/api/?results=20");
    },

};

