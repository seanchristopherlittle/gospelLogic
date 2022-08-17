import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CheckInList from "./components/CheckInList";
import NewCheckIn from "./components/NewCheckIn";
import CheckIn from "./components/CheckIn";
import UpdateCheckIn from "./components/UpdateCheckIn";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          {/* <Route path="/" element={<CheckInList />} />           */}
          <Route
            path="/"
            element={
              <CheckInList
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/new" element={<NewCheckIn />} />
          <Route path="/checkIn/:id" element={<CheckIn />} />
          <Route path="/checkIn/update/:id" element={<UpdateCheckIn />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/register"
            element={<Register setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/profile/:userName" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
