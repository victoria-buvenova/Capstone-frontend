import { MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import { useState } from "react";
import { toast } from "react-toastify";
import AddUser from "./AddUser";
import ValidationError from "./ValidationError";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password, setPassword] = useState({});

  return (
    <div>
      <MDBInput
        wrapperClass="mb-4"
        label="Email"
        id="form1"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form1"
        type="password"
        value={password.first}
        onChange={(e) => setPassword({ ...password, first: e.target.value })}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Confirm password"
        id="form1"
        type="password"
        value={password.second}
        onChange={(e) => {
          setPassword({ ...password, second: e.target.value });
        }}
      />
      {password.second && password.first !== password.second && (
        <ValidationError errorMsg="Passwords do not match" />
      )}

      <MDBBtn
        className="mb-4 w-100"
        onClick={() => {
          AddUser(email, password.first);
          toast("Succesfully registered. Please log in");
        }}
        disabled={password.first !== password.second}
      >
        Sign up
      </MDBBtn>
    </div>
  );
}
