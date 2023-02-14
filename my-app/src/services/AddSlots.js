import axios from "axios";

const AddSlots = async (date, time) => {
  let response = await axios.post(
    `http://localhost:8080/admin/add?Date=${date}&Time=${time}`
  );

  return response.data;
};

export default AddSlots;
