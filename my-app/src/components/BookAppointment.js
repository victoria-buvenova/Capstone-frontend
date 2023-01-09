import React from "react";
import Button from "react-bootstrap/Button";
import { MDBBtn } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import FetchServices from "../services/FetchServices";
import { convertDate, isEmailValid, unique } from "../utils";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Modal from "react-bootstrap/Modal";
import AddBooking from "./AddBooking";

export default function BookAppointment() {
  const [timeslotData, setTimeSlotData] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedId, setSelectedId] = useState();

  const [showModal, setShowModal] = useState();
  const [name, setName] = useState();
  const [contacts, setContacts] = useState();

  useEffect(() => {
    const FetchTimeSlots = async () => {
      let data = await FetchServices("http://localhost:8080/admin/getall");
      setTimeSlotData(data);
    };
    setTimeout(() => {
      FetchTimeSlots();
    }, 1000);
  }, [selectedId]);
  return (
    console.log(timeslotData),
    (
      <>
        <div>
          <div className="container p-3 my-3 border">
            <h3 className="d-flex justify-content-center">
              <strong>Book your appointment</strong>
            </h3>
            <div className="d-flex justify-content-center flex-wrap d-grid gap-3 p-4 m-4">
              {unique(timeslotData)
                .filter((timeslot) => !timeslot.Name)
                .map((timeslot, index) => (
                  <MDBBtn
                    rounded
                    className="mx-2"
                    color={
                      selectedDate === timeslot.Date
                        ? "primary"
                        : "outline-primary"
                    }
                    size="lg"
                    onClick={() => {
                      setSelectedDate(timeslot.Date);
                      setSelectedTime();
                    }}
                    key={timeslot.id}
                    active={selectedDate === timeslot.Date}
                  >
                    {convertDate(timeslot.Date)}
                  </MDBBtn>
                ))}
            </div>

            {selectedDate ? (
              <div className="d-flex justify-content-center flex-wrap d-grid gap-3 p-4 m-4">
                {timeslotData
                  .filter((timeslot) => !timeslot.Name)
                  .filter((timeslot) => timeslot.Date === selectedDate)
                  .map((timeslot, index) => (
                    <Button
                      variant="outline-primary"
                      size="lg"
                      key={timeslot.id}
                      active={selectedTime === timeslot.Time}
                      onClick={() => {
                        setSelectedTime(timeslot.Time);
                        setSelectedId(timeslot.id);
                      }}
                    >
                      {timeslot.Time}
                    </Button>
                  ))}
              </div>
            ) : (
              <div>Please select date</div>
            )}
            <div className="d-grid gap-2 col-3 mx-auto">
              <MDBBtn
                rounded
                className="mx-2"
                color="success"
                size="lg"
                onClick={() => setShowModal(true)}
              >
                BOOK
              </MDBBtn>
            </div>
          </div>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add your name and email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                label="Your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                label="Email"
                type="email"
                value={contacts}
                onChange={(e) => setContacts(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button
              disabled={contacts && !isEmailValid(contacts)}
              variant="primary"
              onClick={() => {
                AddBooking(name, contacts, selectedId);
                setName();
                setContacts();
                setSelectedId();
                setSelectedDate();
                setShowModal(false);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  );
}
