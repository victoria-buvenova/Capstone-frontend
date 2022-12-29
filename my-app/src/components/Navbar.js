import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  //   MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Navbar() {
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  const { isAdmin, isLoggedIn, logout } = useAuth();

  return (
    console.log(isAdmin, isLoggedIn),
    (
      <>
        <MDBNavbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
          <MDBContainer fluid>
            <MDBNavbarBrand
              href="#"
              style={{
                fontFamily: "Alegreya",
                color: "rgb(104, 104, 104)",
              }}
            >
              <Link className="navbar-brand navigation" to="/about">
                Eleonora <MDBIcon far icon="star" />
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavColorThird(!showNavColorThird)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorThird} navbar>
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0 justify-content-end">
                <MDBNavbarItem className="active">
                  <Link className="navbar-brand navigation" to="/home">
                    Home
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link className="navbar-brand navigation" to="/services">
                    Services
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link className="navbar-brand navigation" to="/pricing">
                    Pricing
                  </Link>
                </MDBNavbarItem>
                {/* <MDBNavbarItem>
                  <Link className="navbar-brand navigation" to="/shop">
                    Shop
                  </Link>
                </MDBNavbarItem> */}

                {isAdmin ? (
                  <MDBNavbarItem>
                    <Link className="navbar-brand navigation" to="/clients">
                      My timetable
                    </Link>
                  </MDBNavbarItem>
                ) : undefined}

                {isLoggedIn && !isAdmin ? (
                  <MDBNavbarItem>
                    <Link
                      className="navbar-brand navigation"
                      to="/myappoinment"
                    >
                      My bookings
                    </Link>
                  </MDBNavbarItem>
                ) : undefined}

                {isLoggedIn ? (
                  <MDBBtn
                    outline
                    rounded
                    className="mx-2"
                    color="secondary"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Log out
                  </MDBBtn>
                ) : (
                  <MDBBtn outline rounded className="mx-2" color="secondary">
                    <Link to="/login">Log in</Link>
                  </MDBBtn>
                )}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
    )
  );
}

//
