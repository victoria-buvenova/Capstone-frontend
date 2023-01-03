import axios from "axios";

const AddBooking = async (name, contacts, id) => {
  let response = await axios.put(
    `http://localhost:8080/clients/book?Name=${name}&Contacts=${contacts}&id=${id}`
  );

  return response.data;
};

export default AddBooking;
