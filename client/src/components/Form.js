import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "./Form.css";

const CheckInForm = (props) => {
  const { submitHandler, buttonText, oldCheckIn } = props;
  const [checkIn, setCheckIn] = useState(
    oldCheckIn || {
      month: "",
      year: 0,
      faithLifeScore: 0,
      faithLife: "",
      marriageLifeScore: 0,
      marriageLife: "",
      familyLifeScore: 0,
      familyLife: "",
      workLifeScore: 0,
      workLife: "",
      digitalLifeScore: 0,
      digitalLife: "",
      ministryLifeScore: 0,
      ministryLife: "",
      financialLifeScore: 0,
      financialLife: "",
      socialLifeScore: 0,
      socialLife: "",
      attitudinalLifeScore: 0,
      attitudinalLife: "",
      creativeLifeScore: 0,
      creativeLife: "",
      emotionalLifeScore: 0,
      emotionalLife: "",
      physicalLifeScore: 0,
      physicalLife: "",
    }
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCheckIn({ ...checkIn, [e.target.name]: e.target.value });
    // if (e.target.name === "isKidFriendly") {
    //   setMovie({ ...movie, [e.target.name]: e.target.checked });
    // } else if (e.target.name === "actors") {
    //   setMovie({ ...movie, [e.target.name]: e.target.value.split(",") });
    // } else {
    //   setMovie({ ...movie, [e.target.name]: e.target.value });
    // }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(checkIn, setErrors);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   // style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    // >
    <div className="container">
      {/* <Card style={{ width: "50rem" }}> */}
      <Form onSubmit={handleSubmit}>
        {/* <Card.Header> */}
        <Row>
          <Col>
            <Form.Select
              aria-label="Default select example"
              value={checkIn.month}
              name="month"
              onChange={handleChange}
            >
              <option>month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              value={checkIn.year}
              name="year"
              onChange={handleChange}
            >
              <option>year</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </Form.Select>
          </Col>
        </Row>
        {/* </Card.Header> */}
        {/* <Card.Body> */}
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item>
            <h1>Faith</h1>
            <Carousel.Caption>
              <h3>How is my relationship with God?</h3>
              <p>How have I prioritized prayer, His word, and worship?</p>
              <Form.Label>score: {checkIn.faithLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.faithLifeScore}
                name="faithLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.faithLife}
                name="faithLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Marriage</h1>
            <Carousel.Caption>
              <h3>How is my relationship with my spouse?</h3>
              <p>
                How have I prioritized dating my spouse, investing in our
                relationship, and honoring God through my marriage?
              </p>
              <Form.Label>score: {checkIn.marriageLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.marriageLifeScore}
                name="marriageLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.marriageLife}
                name="marriageLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Family</h1>
            <Carousel.Caption>
              <h3>How are my relationships with my family?</h3>
              <p>
                How have I prioritized my family and invested in nurturing the
                relationships in both the first and second rings?{" "}
              </p>
              <Form.Label>score: {checkIn.familyLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.familyLifeScore}
                name="familyLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.familyLife}
                name="familyLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Work</h1>
            <Carousel.Caption>
              <h3>How am I honoring God through my work?</h3>
              <p>
                How have I walked out my faith in the workplace or used my work
                to honor God's Kingdom?
              </p>
              <Form.Label>score: {checkIn.workLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.workLifeScore}
                name="workLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.workLife}
                name="workLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Digital</h1>
            <Carousel.Caption>
              <h3>How is my relationship with technology?</h3>
              <p>
                Is my realtionship with technology life giving or creating
                distance with God and loved ones?
              </p>
              <Form.Label>score: {checkIn.digitalLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.digitalLifeScore}
                name="digitalLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.digitalLife}
                name="digitalLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Ministry</h1>
            <Carousel.Caption>
              <h3>How am I ministering to others?</h3>
              <p>
                In what areas of my life am I ministering to others as a living
                example of my faith?
              </p>
              <Form.Label>score: {checkIn.ministryLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.ministryLifeScore}
                name="ministryLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.ministryLife}
                name="ministryLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Finances</h1>
            <Carousel.Caption>
              <h3>How is my relationship with my finances?</h3>
              <p>
                Am I honoring God's Kingdom with my finances? Am I stewarding my
                finances with an open hand or a clenched fist?
              </p>
              <Form.Label>score: {checkIn.financialLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.financialLifeScore}
                name="financialLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.financialLife}
                name="financialLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Social</h1>
            <Carousel.Caption>
              <h3>How are my friendships?</h3>
              <p>
                How am I sewing into my friendships and who am I sewing with?
                Show me your friends and I'll show you your future.
              </p>
              <Form.Label>score: {checkIn.socialLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.socialLifeScore}
                name="socialLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.socialLife}
                name="socialLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Attitude</h1>
            <Carousel.Caption>
              <h3>How is my attitude?</h3>
              <p>
                Is my posture aligned with a spirit of excitement, gratitude and
                joy or am I easily influenced by this world? Am I filled with a
                spirit of amazement and awe?
              </p>
              <Form.Label>score: {checkIn.attitudinalLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.attitudinalLifeScore}
                name="attitudinalLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.attitudinalLife}
                name="attitudinalLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Creativity</h1>
            <Carousel.Caption>
              <h3>How is my creativity</h3>
              <p>
                How have I been dreaming and planning for the future? Have I
                been setting God sized goals?
              </p>
              <Form.Label>score: {checkIn.creativeLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.creativeLifeScore}
                name="creativeLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.creativeLife}
                name="creativeLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Emotional</h1>
            <Carousel.Caption>
              <h3>How is mental and emotional health?</h3>
              <p>
                How am I holding captive my mind and thoughts? Am I regulating
                the inputs in order to control the output? Am I avoiding
                stinking thinking?
              </p>
              <Form.Label>score: {checkIn.emotionalLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.emotionalLifeScore}
                name="emotionalLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.emotionalLife}
                name="emotionalLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Physical</h1>
            <Carousel.Caption>
              <h3>How is my physical health?</h3>
              <p>
                How am I honoring my body? Am I exercising regularly and
                monitoring my nutrition?
              </p>
              <Form.Label>score: {checkIn.physicalLifeScore}</Form.Label>
              <Form.Range
                type="number"
                min="1"
                max="10"
                value={checkIn.physicalLifeScore}
                name="physicalLifeScore"
                onChange={handleChange}
              />
              <Form.Label>reflection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.physicalLife}
                name="physicalLife"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Goal</h1>
            <Carousel.Caption>
              <h3>What is this month's goal?!</h3>
              <p>
                What one thing, if it got better, would change everything the
                most? What am I not doing that I should be doing? What am I
                doing that I shouldn't be?
              </p>
              <Form.Label>monthly goal</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={checkIn.monthlyGoal}
                name="monthlyGoal"
                onChange={handleChange}
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* </Card.Body> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* </Card> */}
    </div>
    // </form>
  );
};

export default CheckInForm;
