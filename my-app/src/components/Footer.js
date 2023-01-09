import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/sugaringvswaxing" className="text-reset">
                  Why sugaring is better?
                </Link>
              </p>
              <p>
                <Link to="/faq" className="text-reset">
                  FAQ
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#32CD32" }}
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="whatsapp" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgb(206, 233, 255)",
          color: "rgb(112, 112, 112)",
          fontFamily: "Alegreya",
          fontSize: "16px",
        }}
      >
        © 2022 Eleonora Omarbagaeva
      </div>
    </MDBFooter>
  );
}
