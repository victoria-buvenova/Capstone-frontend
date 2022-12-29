import FetchMakeupServices from "./FetchMAkeupServices";
import ServicesCard from "./ServicesCard";
import { MDBRow } from "mdb-react-ui-kit";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";

export const MekeupServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const updateServices = async () => {
      let myData = await FetchMakeupServices();
      setServices(myData);
    };
    console.log("makeup");
    updateServices();
  }, []);

  if (services.length === 0) {
    return <Spinner />;
  }

  return (
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
  );
};
