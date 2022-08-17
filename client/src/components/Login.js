import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Login.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Card style={{ width: "30rem" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="email">email:</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <Form.Label htmlFor="password">password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <Button className="button" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
