import axios from "axios";

export default {
  //Loads Cart
  loadCart: items => {
    console.log(items)
    return axios.post("/api/walmart/cartLoad", items);
  },
};