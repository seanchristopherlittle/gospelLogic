import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DeleteCheckIn from "./DeleteCheckIn";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import "./CheckInList.css";
const CheckInList = ({ isLoggedIn, setIsLoggedIn }) => {
  const [checkIns, setCheckIns] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/current-user", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [isLoggedIn]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/checkIns", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setCheckIns(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .post("http://localhost:8000/logout", {}, { withCredentials: true })
      .then((res) => {
        setUser(null);
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    const newCheckIns = checkIns.filter((checkIn) => checkIn._id !== id);
    setCheckIns(newCheckIns);
  };
  return (
    <div className="container">
      {user ? (
        <div className="">
          <div className="hello">
            <h2>Hello {user.userName}</h2>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
          {checkIns.map((checkIn) => (
            <Card className="entryCard" key={checkIn._id}>
              <h4>
                {checkIn.month} | {checkIn.year}
              </h4>
              <div>
                <Link
                  className="nav-ink "
                  to={`/checkIn/${checkIn._id}`}
                  state={checkIn}
                >
                  Details
                </Link>
                <span> | </span>
                <Link
                  className="nav-ink "
                  to={`/checkIn/update/${checkIn._id}`}
                  state={checkIn}
                >
                  Edit
                </Link>
              </div>
              {/* <DeleteMovie id={movie._id} handleDelete={handleDelete} /> */}
              <DeleteCheckIn id={checkIn._id} handleDelete={handleDelete} />
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <h3>
            Experience is not the best teacher, Evaluated Experience is the best
            teacher!!!
          </h3>
          <h5>
            This could be best year of your life…. NOT EASIER! But BETTER!
          </h5>
          <h5>
            If we dedicate our lives to something greater than ourselves, God
            will fill our lives with passion and adventure!
          </h5>
        </div>
      )}
    </div>
  );
};

export default CheckInList;
