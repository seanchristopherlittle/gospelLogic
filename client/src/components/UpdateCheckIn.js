import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Form from "./Form";

const UpdateCheckIn = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const [oldCheckIn, setOldCheckIn] = useState(null);

  useEffect(() => {
    if (!state) {
      console.log("HELLO API??", state);
      axios
        .get(`http://localhost:8000/api/checkIns/${id}`)
        .then((res) => {
          setOldCheckIn(res.data);
        })
        .catch((err) => console.log("GET CHECKIN BY ID ERROR", err));
    } else {
      console.log("HELLO STATE?", state);
      setOldCheckIn(state);
    }
  }, [id]);

  const submitHandler = (checkIn, setErrors) => {
    axios
      .put(`http://localhost:8000/api/checkIns/${id}`, checkIn)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  return (
    oldCheckIn && (
      <Form
        submitHandler={submitHandler}
        buttonText="Update Entry"
        oldCheckIn={oldCheckIn}
      />
    )
  );
};

export default UpdateCheckIn;
