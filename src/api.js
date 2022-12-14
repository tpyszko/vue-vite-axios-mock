import axios from "axios";

const baseURL = "https://api.coindesk.com/v1/bpi/currentprice.json";

const api = axios.create({ baseURL });

const getBTCprice = () => api.get(baseURL).then((response) => response.data);

export default {
  getBTCprice,
};
