import FetchSugaringServices from "./FetchSugaringServices";
import ServicesCard from "./ServicesCard";
import { MDBRow } from "mdb-react-ui-kit";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";

export const SugaringServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const updateServices = async () => {
      let myData = await FetchSugaringServices();
      setServices(myData);
    };
    console.log("sugaring");
    updateServices();
  }, []);

  if (services.length === 0) {
    return <Spinner />;
  }

  return (
    console.log("ggg/", services),
    (
      <div>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {services.map((service, index) => {
            return (
              <ServicesCard
                item={service}
                type={service.type}
                description={service.description}
                price={service.price}
                color={"info"}
                key={index}
              />
            );
          })}
        </MDBRow>
      </div>
    )
  );
};

// <MDBCard alignment="center"> {services.map()}
{
  /* //       <MDBCardHeader>Featured</MDBCardHeader>
    //       <MDBCardBody>
    //         <MDBCardTitle>Special title treatment</MDBCardTitle>
    //         <MDBCardText>
    //           With supporting text below as a natural lead-in to additional content.
    //         </MDBCardText>
    //         <MDBBtn href="#">Button</MDBBtn>
    //       </MDBCardBody>
    //       <MDBCardFooter className="text-muted">2 days ago</MDBCardFooter>
    //     </MDBCard> */
}
