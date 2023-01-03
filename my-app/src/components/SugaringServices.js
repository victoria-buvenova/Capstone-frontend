import FetchServices from "./FetchServices";
import Card from "./ServicesCard";
import { MDBRow } from "mdb-react-ui-kit";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

export const SugaringServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const updateServices = async () => {
      let myData = await FetchServices(
        "http://localhost:8080/clients/sugaring"
      );
      setServices(myData);
    };

    updateServices();
  }, []);

  if (services.length === 0) {
    return <Spinner />;
  }

  return (
    <div class="p-4">
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {services.map((service, index) => {
          return (
            //   <Card
            //     item={service}
            //     type={service.type}
            //     description={service.description}
            //     price={service.price}
            //     color={"bg-success p-2 text-dark opacity-10"}
            //     key={index}
            //   />

            <MDBCard
              border="primary"
              background="white"
              className="text-black mb-3 d-flex justify-content-space-between"
            >
              <MDBCardHeader> {service.type}</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>{service.price}</MDBCardTitle>
                <MDBCardText>{service.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </MDBRow>
    </div>
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
