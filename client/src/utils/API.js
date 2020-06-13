import axios from "axios";

export default {
    getEmployees: () => {
        return axios.get("https://www.giantbomb.com/api/games/?api_key=fd314fc0e15cfdba950d3f5c330e70ba2f464953&format=json&filter=expected_release_year:2020,platform:94&resources=games");
    }
}

// https://randomuser.me/api/?results=10&nat=us
// https://www.giantbomb.com/api/games/?api_key=fd314fc0e15cfdba950d3f5c330e70ba2f464953&format=json&filter=expected_release_month:8&resources=games


