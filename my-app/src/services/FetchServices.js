import axios from "axios";

const FetchServices = async (url) => {
  let response = await axios.get(url);

  return response.data;
};

export default FetchServices;
