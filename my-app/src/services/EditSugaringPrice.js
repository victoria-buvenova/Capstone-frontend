import axios from "axios";

const EditSugaringPrice = async (id, price) => {
  let response = await axios.put(
    `http://localhost:8080/admin/updatesugaringprice?price=${price}&id=${id}`
  );

  return response.data;
};

export default EditSugaringPrice;
