import axios from "axios";

const AddBooking = async (name, contacts, id) => {
  console.log(name, contacts);
  let response = await axios.put(
    `http://localhost:8080/clients/book?Name=${name}&Contacts=${contacts}&id=${id}`
  );
  console.log(response);
  return response.data;
};

export default AddBooking;
