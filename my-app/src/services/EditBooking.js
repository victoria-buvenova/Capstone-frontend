import axios from "axios";

const EditBooking = async (id, date, time) => {
  let response = await axios.put(
    `http://localhost:8080/admin/updatedateandtime?id=${id}&Date=${date}&Time=${time}`
  );

  return response.data;
};

export default EditBooking;
