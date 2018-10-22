import axios from "axios";

export default {
  //Loads Cart
  loadCart: items => {
    console.log(items)
    return axios.get("/api/walmart/cartLoad", items);
  },
};