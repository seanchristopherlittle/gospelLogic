import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const NewCheckIn = () => {
  const navigate = useNavigate();
  const submitHandler = (checkIn, setErrors) => {
    axios
      .post("http://localhost:8000/api/checkIns", checkIn, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return <Form submitHandler={submitHandler} buttonText="Add Entry" />;
};

export default NewCheckIn;
