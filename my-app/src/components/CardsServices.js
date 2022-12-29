import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  //   MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
// import SugaringServices from "./SugaringServices";

export default function CardsServices() {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <Link to="/sugaring">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://media.istockphoto.com/id/1324801970/vi/anh/b%E1%BB%99t-nh%C3%A3o-shugaring-t%E1%BA%A9y-l%C3%B4ng-to%C3%A0n-th%C3%A2n-s%E1%BB%B1-suy-gi%E1%BA%A3m-s%E1%BA%A3n-ph%E1%BA%A9m-ch%C4%83m-s%C3%B3c-c%C6%A1-th%E1%BB%83.jpg?s=612x612&w=0&k=20&c=mc3uLVvQ_NvEHL6WHZu2fuiVg3_im1gyPkcuB64GNW4="
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="d-flex justify-content-center">
                SUGARING
              </MDBCardTitle>
              <MDBCardText>
                Explore our sugaring hair removal services
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </Link>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://media.istockphoto.com/id/519356382/vi/anh/s%E1%BA%A3n-ph%E1%BA%A9m-trang-%C4%91i%E1%BB%83m-%C4%91%E1%BB%83-th%E1%BA%ADm-ch%C3%AD-l%C3%A0m-n%E1%BB%95i-b%E1%BA%ADt-t%C3%B4ng-m%C3%A0u-da-v%C3%A0-l%C3%A0n-da.jpg?s=612x612&w=0&k=20&c=vvIWchLjVhpEdlp83EoP-ig87gi4T0LSsoGyxslJL6w="
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle className="d-flex justify-content-center">
              MAKE-UP
            </MDBCardTitle>
            <MDBCardText>
              Learn more about full face make-up application
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://media.istockphoto.com/id/1004052418/vi/anh/l%C3%A0m-m%C3%B3ng-tay-m%C3%A0u-h%E1%BB%93ng-v%C3%A0-xanh-tuy%E1%BB%87t-%C4%91%E1%BA%B9p-v%E1%BB%9Bi-c%C3%A1c-tinh-th%E1%BB%83-tr%C3%AAn-tay-ph%E1%BB%A5-n%E1%BB%AF-close-up.jpg?s=612x612&w=0&k=20&c=HfJjYe1klPALtYHuj9I28VxtHqb_YHKaTdwP3Cee8TY="
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle className="d-flex justify-content-center">
              NAILS
            </MDBCardTitle>
            <MDBCardText>
              Need your nails done? Click on to see what services we offer
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
