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
import { useNavigate } from "react-router-dom";
import FetchServices from "../services/FetchServices";
import Register from "./Register";
import { isEmailValid, isPasswordValid } from "../utils";

function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();
  const { login, setAdmin, setClient } = useAuth();
  const [errMsg, setErrMsg] = useState("");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const FetchUsers = async () => {
    let data = await FetchServices("http://localhost:8080/admin/getallusers");
    setUsers(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      FetchUsers();
    }, 1000);
  }, []);

  return (
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
          <div style={{ color: "red" }}>{errMsg}</div>

          <MDBBtn
            disabled={!isPasswordValid(password)}
            className="mb-4 w-100"
            onClick={() => {
              const user = users.find(
                (user) => user.email === email && user.password === password
              );
              if (!user) {
                setErrMsg("Password or Email is incorrect");
              } else {
                const admin = users.find(
                  (user) =>
                    user.email === email &&
                    user.password === password &&
                    user.isAdmin
                );
                login(user, admin);
                setAdmin(email, password);
                setClient(email, password);
                navigate("/home");
              }
            }}
          >
            Sign in
          </MDBBtn>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <Register />
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;
