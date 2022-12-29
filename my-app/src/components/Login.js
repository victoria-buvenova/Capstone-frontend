import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useAuth } from "../context/AuthProvider";
import FetchAllUsers from "./GetAllUsers";
import { Navigate, useNavigate } from "react-router-dom";

function App() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();
  const { login } = useAuth();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const FetchUsers = async () => {
    let data = await FetchAllUsers();
    setUsers(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      FetchUsers();
    }, 1000);
  }, []);

  return (
    console.log(email, password, users),
    (
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <div className="text-center mb-3">
              <p>Sign in with:</p>

              <div
                className="d-flex justify-content-around mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-around mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn
              className="mb-4 w-100"
              onClick={() => {
                const user = users.find(
                  (user) => user.email === email && user.password === password
                );

                const admin = users.find(
                  (user) =>
                    user.email === email &&
                    user.password === password &&
                    user.isAdmin
                );
                login(user, admin);
                navigate("/home");
              }}
            >
              Sign in
            </MDBBtn>
            <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <div className="text-center mb-3">
              <p>Sign un with:</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" />
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
            />

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div>

            <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    )
  );
}

export default App;
