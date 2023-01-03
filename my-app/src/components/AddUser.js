import axios from "axios";

const AddUser = async (email, password) => {
  let response = await axios.post(
    `http://localhost:8080/admin/register?email=${email}&password=${password}`
  );
  console.log(response);
  return response.data;
};

export default AddUser;
