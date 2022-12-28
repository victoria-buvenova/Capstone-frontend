import FetchAllClients from "./FetchAllClients";
import React from "react";
import { useEffect, useState } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
// import AddTimeslot from "./AddTimeslot";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeleteClient from "./DeleteClient";
import EditBooking from "./EditBooking";
import AddSlots from "./AddSlots";
import { extractDateFromJSDate, extractTimeFromJSDate } from "../utils";

export default function ClientsList() {
  const [timeslotData, setTimeSlotData] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selected, setSelected] = useState();

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [addTime, setAddTime] = useState();

  const FetchTimeSlots = async () => {
    let data = await FetchAllClients();
    setTimeSlotData(data);
  };

  useEffect(() => {
    setTimeout(() => {
      FetchTimeSlots();
    }, 1000);
  }, [selected, addTime]);

  if (timeslotData.length === 0) return <div>No clients</div>;
  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button type="button" class="btn btn-success px-6" onClick={handleShow}>
          <MDBIcon fas icon="plus-circle" /> ADD
        </button>
      </div>*/}
      <div
        className="table-container"
        style={{
          padding: "60px",
        }}
      >
        <button
          type="button"
          class="btn btn-success d-grid gap-1 my-2 mx-auto"
          onClick={() => {
            setSelected();
            handleShowAdd();
          }}
        >
          <MDBIcon fas icon="plus-circle" /> ADD
        </button>
        <MDBTable className="table table-striped">
          <MDBTableHead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Contacts</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {timeslotData.map((timeslot) => (
              <tr key={timeslot.id}>
                <th scope="row">{timeslot.id}</th>
                <td>{timeslot.Name}</td>
                <td>{timeslot.Date}</td>
                <td>{timeslot.Time}</td>
                <td>{timeslot.Contacts}</td>

                <button
                  type="button"
                  className="btn  px-6"
                  onClick={() => {
                    setSelected(timeslot.id);
                    handleShowEdit();
                  }}
                >
                  <MDBIcon fas icon="edit" />
                </button>

                <button
                  type="button"
                  class="btn  px-6"
                  onClick={() => {
                    setSelected(timeslot.id);
                    handleShowDelete();
                  }}
                >
                  <MDBIcon fas icon="trash-alt" />
                </button>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title>Add your available dates and timeslots</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                // defaultValue="2017-05-24T10:30"
                value={addTime}
                onChange={(e) => setAddTime(e.target.value)}
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                AddSlots(
                  extractDateFromJSDate(addTime),
                  extractTimeFromJSDate(addTime)
                );
                setAddTime();
                handleCloseAdd();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit date or time</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="form-outline">
              <input type="text" id="typeText" class="form-control" />
              <label class="form-label" for="typeText">
                Enter client ID
              </label>
            </div>
            <br></br>
            <div class="form-outline">
              <input type="text" id="typeText" class="form-control" />
              <label class="form-label" for="typeText">
                Edit date
              </label>
            </div>
            <br></br>
            <div class="form-outline">
              <input type="text" id="typeText" class="form-control" />
              <label class="form-label" for="typeText">
                Edit time
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                EditBooking(selected);
                setSelected();
                handleCloseEdit();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showDelete} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Delete booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this booking?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDelete}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                DeleteClient(selected);
                setSelected();
                handleCloseDelete();
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
