import axios from "axios";

const DeleteClient = async (id) => {
  let response = await axios.delete(
    `http://localhost:8080/admin/deletebyid?id=${id}`
  );

  return response.data;
};

export default DeleteClient;
