import axios from "axios";

const DeleteCheckIn = (props) => {
  const { id, handleDelete } = props;
  const deleteCheckIn = () => {
    axios
      .delete(`http://localhost:8000/api/checkIns/${id}`)
      .then((res) => {
        handleDelete(id);
      })
      .catch((err) => console.log("ERROR ON DELETE", err));
  };

  return <button onClick={deleteCheckIn}>Delete</button>;
};

export default DeleteCheckIn;
