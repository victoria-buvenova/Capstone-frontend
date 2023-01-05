import FetchServices from "./FetchServices";
import { MDBRow } from "mdb-react-ui-kit";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditPrice from "./EditPrice";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider";

export const SugaringServices = () => {
  const [services, setServices] = useState([]);
  const [price, setPrice] = useState();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const { isAdmin } = useAuth();

  useEffect(() => {
    const updateServices = async () => {
      let myData = await FetchServices(
        "http://localhost:8080/clients/sugaring"
      );
      setServices(myData);
    };
    setTimeout(() => {
      updateServices();
    }, 1000);
  }, [id]);

  if (services.length === 0) {
    return <Spinner />;
  }

  return (
    console.log(id),
    (
      <>
        <div className="p-4">
          <MDBRow className="row-cols-1 row-cols-md-4 g-4">
            {services.map((service, index) => {
              return (
                <MDBCard
                  key={index}
                  border="primary"
                  background="white"
                  className="text-black mb-3 d-flex justify-content-space-between"
                >
                  <MDBCardHeader> {service.type}</MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardTitle>
                      <div className="d-flex justify-content-between">
                        {service.price}$
                        {isAdmin ? (
                          <MDBBtn
                            className="ms-auto p-2"
                            onClick={() => {
                              setShowModal(true);
                              setId(service.id);
                            }}
                          >
                            Edit price
                          </MDBBtn>
                        ) : undefined}
                      </div>
                    </MDBCardTitle>

                    <MDBCardText>{service.description}</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              );
            })}
          </MDBRow>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit price for this service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                label="Edit price"
                type="number"
                // defaultValue="2017-05-24T10:30"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                EditPrice(id, price);
                toast("Price successfully edited");
                setPrice();
                setId();
                setShowModal(false);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  );
};

// import Card from "react-bootstrap/Card";
// import Spinner from "./Spinner";
// import { useEffect, useState } from "react";
// import FetchServices from "./FetchServices";
// import { MDBRow } from "mdb-react-ui-kit";

// export const SugaringServices = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const updateServices = async () => {
//       let myData = await FetchServices(
//         "http://localhost:8080/clients/sugaring"
//       );
//       setServices(myData);
//     };
//     console.log("sugaring");
//     updateServices();
//   }, []);

//   if (services.length === 0) {
//     return <Spinner />;
//   }

//   return (
//     <>
//       {services.map((service, index) => (
//         <MDBRow className="row-cols-1 row-cols-md-3 g-4">
//           <Card
//             bg={service}
//             key={index}
//             text={service === "light" ? "dark" : "white"}
//             style={{ width: "18rem" }}
//             className="mb-2"
//           >
//             <Card.Header>Header</Card.Header>
//             <Card.Body>
//               <Card.Title>{service.type} </Card.Title>
//               <Card.Text>
//                 {service.description} {service.price}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </MDBRow>
//       ))}
//     </>
//   );
// };
