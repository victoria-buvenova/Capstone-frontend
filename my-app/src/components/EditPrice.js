import axios from "axios";

const EditPrice = async (id, price) => {
  let response = await axios.put(
    `http://localhost:8080/admin/updatesugaringprice?price=${price}&id=${id}`
  );

  return response.data;
};

export default EditPrice;
