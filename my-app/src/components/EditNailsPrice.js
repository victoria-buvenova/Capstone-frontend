import axios from "axios";

const EditNailsPrice = async (id, price) => {
  let response = await axios.put(
    `http://localhost:8080/admin/updatenailsprice?price=${price}&id=${id}`
  );

  return response.data;
};

export default EditNailsPrice;
