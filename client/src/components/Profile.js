import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DeleteCheckIn from "./DeleteCheckIn";

const Profile = () => {
  const { userName } = useParams();
  const [checkInList, setCheckInList] = useState([]);
  const [checkIns, setCheckIns] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/checkIns-by-user/${userName}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setCheckInList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteCheckIn = (checkInId) => {
    const newCheckIns = checkIns.filter((checkIn) => checkIn._id !== checkInId);
    setCheckIns(newCheckIns);
  };

  return (
    <div className="container">
      <div>
        <h2>{userName}</h2>
      </div>
      {checkInList.map((checkIn) => (
        <div key={checkIn._id} className="card">
          <h3> {checkIn.month} </h3>
          <h4>{checkIn.year}</h4>
          {/* <img src={checkIn.image} alt={checkIn.userName} /> */}
          <br />
          <Link to={`/checkIn/${checkIn._id}`} state={checkIn}>
            Details
          </Link>
          <span> | </span>
          <Link to={`/checkIn/update/${checkIn._id}`} state={checkIn}>
            Edit
          </Link>
          <br />
          {/* <DeleteMovie id={movie._id} handleDelete={handleDelete} /> */}
          <DeleteCheckIn id={checkIn._id} deleteCallback={deleteCheckIn} />
        </div>
        // <Movie key={movie._id} movie={movie} />
      ))}
    </div>
  );
};
export default Profile;

{
  /* <Link to={`/profile/${checkIn.createdBy.userName}`}>
  {checkIn.createdBy.userName}
</Link> */
}
//     <div>
//     <h2>{userName}</h2>

//     {checkInList.map((checkIn) => (
//       <div key={checkIn._id}>
//         <p>{checkIn.title}</p>
//         <img src={checkIn.boxArt} alt={checkIn.title} />
//         <p>{checkIn.releaseYear}</p>
//         <p>{checkIn.genre}</p>
//       </div>
//     ))}
//   </div>
