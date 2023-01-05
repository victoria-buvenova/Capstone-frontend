import React from "react";
import { useEffect, useState } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeleteClient from "./DeleteClient";
import EditBooking from "./EditBooking";
import AddSlots from "./AddSlots";
import {
  convertToJSDate,
  extractDateFromJSDate,
  extractTimeFromJSDate,
  getCurrentClient,
} from "../utils";

import FetchServices from "./FetchServices";
import { toast } from "react-toastify";

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
    let data = await FetchServices("http://localhost:8080/admin/getall");
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
      <div
        className="table-container"
        style={{
          padding: "60px",
        }}
      >
        <button
          type="button"
          className="btn btn-success d-grid gap-1 my-2 mx-auto"
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
            {timeslotData.map((timeslot, index) => (
              <tr key={timeslot.id}>
                <th scope="row">{index + 1}</th>
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
                  className="btn  px-6"
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
                toast("Successfully added");
                setAddTime();
                handleCloseAdd();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {selected && (
          <Modal
            show={showEdit}
            onHide={() => {
              setSelected();
              handleCloseEdit();
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {getCurrentClient(timeslotData, selected).Name
                  ? `Edit date or time for
                  ${getCurrentClient(timeslotData, selected).Name}`
                  : "Confirm booking"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Stack component="form" noValidate spacing={3}>
                <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  defaultValue={convertToJSDate(
                    getCurrentClient(timeslotData, selected).Date,
                    getCurrentClient(timeslotData, selected).Time
                  )}
                  // value={addTime}
                  onChange={(e) => setAddTime(e.target.value)}
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEdit}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  EditBooking(
                    getCurrentClient(timeslotData, selected).id,
                    extractDateFromJSDate(addTime),
                    extractTimeFromJSDate(addTime)
                  );
                  toast("Successfully edited");
                  setAddTime();
                  setSelected();
                  handleCloseEdit();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
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
                toast("Successfully deleted");
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
