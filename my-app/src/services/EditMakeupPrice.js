import axios from "axios";

const EditMakeupPrice = async (id, price) => {
  let response = await axios.put(
    `http://localhost:8080/admin/updatemakeupprice?price=${price}&id=${id}`
  );

  return response.data;
};

export default EditMakeupPrice;
