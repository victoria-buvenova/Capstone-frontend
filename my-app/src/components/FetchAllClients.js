import axios from "axios";

const FetchAllClients = async () => {
  let response = await axios.get("http://localhost:8080/admin/getall");

  return response.data;
};

export default FetchAllClients;
