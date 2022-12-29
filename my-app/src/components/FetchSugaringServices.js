import axios from "axios";

const FetchSugaringServices = async () => {
  let response = await axios.get("http://localhost:8080/clients/sugaring");
  console.log(response);
  return response.data;
};

export default FetchSugaringServices;
