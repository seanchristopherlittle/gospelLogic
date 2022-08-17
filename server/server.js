require("./config/mongoose.config");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
// SAMPLE CODE FOR FUTURE USE W/ CONTENT IN LATER ITERATION
// const socket = require("socket.io");
// const CheckIn = require("./models/checkIn.model");

app.use(cookieParser());
app.use(express.json());
// app.use(cors());  USE THIS FOR PROJECT
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

require("./routes/checkIn.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT}`));

// const server = app.listen(PORT, () =>
//   console.log(`SERVER IS RUNNING ON ${PORT}`)
// );
// const io = socket(server, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connection", (socket) => {
//   console.log("NEW USER", socket.id);
//   socket.on("deleteCheckIn", (payload) => {
//     CheckIn.deleteOne({ _id: payload })
//       .then((checkIn) => io.emit("checkInDeleted", payload))
//       .catch((err) => console.log("err", err));
//   });
//   socket.on("disconnect", (socket) => {
//     console.log(`USER: ${socket} left`);
//   });
// });
