import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import DeleteCheckIn from "./DeleteCheckIn";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CheckIn.css";

const CheckIn = () => {
  const [checkIn, setCheckIn] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      console.log("API??", state);
      axios
        .get(`http://localhost:8000/api/checkIns/${id}`)
        .then((res) => {
          console.log(res.data);
          setCheckIn(res.data);
        })
        .catch((err) => console.log("GET CHECKIN BY ID ERROR", err));
    } else {
      console.log("STATE", state);
      setCheckIn(state);
    }
  }, [id]);

  const handleDelete = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <Card style={{ width: "50rem", marginBottom: "100px" }}>
        <Card.Header as="h3">
          {checkIn.month} | {checkIn.year}
        </Card.Header>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Faith</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.faithLifeScore}</p>
              <p>{checkIn.faithLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Marriage</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.marriageLifeScore}</p>
              <p>{checkIn.marriageLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Family</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.familyLifeScore}</p>
              <p>{checkIn.familyLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Work</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.workLifeScore}</p>
              <p>{checkIn.workLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Digital</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.digitalLifeScore}</p>
              <p>{checkIn.digitalLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Ministry</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.ministryLifeScore}</p>
              <p>{checkIn.ministryLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Financial</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.financialLifeScore}</p>
              <p>{checkIn.financialLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Social</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.socialLifeScore}</p>
              <p>{checkIn.socialLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Attitude</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.attitudinalLifeScore}</p>
              <p>{checkIn.attitudinalLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Creativity</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.creativeLifeScore}</p>
              <p>{checkIn.creativeLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>Emotional</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.emotionalLifeScore}</p>
              <p>{checkIn.emotionalLife}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>Physical</Accordion.Header>
            <Accordion.Body>
              <p>score: {checkIn.physicalLifeScore}</p>
              <p>{checkIn.physicalLife}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="goalCard">
          <Card style={{ width: "50rem", height: "11rem" }}>
            <Card.Header as="h5">Goal</Card.Header>
            <Card.Body>
              <Card.Title>What am I doing to accomplish my purpose?</Card.Title>
              <Card.Text>{checkIn.monthlyGoal}</Card.Text>
              {/* <Link
                to={`/profile/${checkIn?.createdBy?.userName}`}
                state={checkIn}
              >
                <Button variant="primary">Home</Button>
              </Link> */}
            </Card.Body>
          </Card>
        </div>

        <DeleteCheckIn id={checkIn._id} handleDelete={handleDelete} />
      </Card>
    </div>
  );
};

export default CheckIn;
