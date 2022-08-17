import axios from "axios";
import { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
// import Button from "react-bootstrap/esm/Button";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
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
  console.log(isLoggedIn);

  return (
    <>
      <Navbar className="navBar" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qJXFVoBhVA7UWbm_IGhWMkamR0BX4YYEjA&usqp=CAU"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Gospel Logic
        </Navbar.Brand>
      </Navbar>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        {isLoggedIn || user ? (
          <div className="nav">
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="/new">
                New Entry
              </Nav.Link>
            </Nav.Item>
          </div>
        ) : (
          <div className="nav">
            <Nav.Item>
              <Nav.Link eventKey="link-2" href="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" href="/register">
                Register
              </Nav.Link>
            </Nav.Item>
          </div>
        )}
      </Nav>
    </>
  );
};

export default Header;

// <header className="header">
//   <Navbar bg="#0e1741" variant="dark">
//     {/* <Container> */}
//     <Navbar.Brand href="#home">
//       <img
//         alt=""
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qJXFVoBhVA7UWbm_IGhWMkamR0BX4YYEjA&usqp=CAU"
//         width="30"
//         height="30"
//         className="d-inline-block align-top"
//         id="icon"
//       />{" "}
//       Gospel Logic
//     </Navbar.Brand>
//     {/* </Container> */}
//   </Navbar>
//   <Nav className="navBar">
//     <div className="navBarLeft">
//       <NavLink className="nav-link" to="/">
//         Home
//       </NavLink>
//       <NavLink className="nav-link" to="/new">
//         Add New
//       </NavLink>
//     </div>
//     <div className="navTabs">
//       {user ? (
//         <div>
//           <div className="">
//             <p>Hello {user.userName}</p>
//           </div>
//           <div className="navBarRight">
//             <Button onClick={handleLogout}>Logout</Button>
//           </div>
//         </div>
//       ) : (
//         <div className="navBarLeft">
//           <NavLink className="nav-link" to="/login">
//             Login
//           </NavLink>
//           <NavLink className="nav-link" to="/register">
//             Register
//           </NavLink>
//         </div>
//       )}
//     </div>
//   </Nav>
// </header>
