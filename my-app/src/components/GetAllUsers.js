import axios from "axios";

const FetchAllUsers = async () => {
  let response = await axios.get("http://localhost:8080/admin/getallusers");

  return response.data;
};

export default FetchAllUsers;
