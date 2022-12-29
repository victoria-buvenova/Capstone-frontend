import axios from "axios";

const FetchMakeupServices = async () => {
  let response = await axios.get("http://localhost:8080/clients/makeup");
  console.log(response);
  return response.data;
};

export default FetchMakeupServices;
