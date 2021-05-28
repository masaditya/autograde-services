const express = require("express");
const app = express();

require("./config/db");

// parsing body request
app.use(express.json());

// app.use(app.router);
// include router
const biodataRouter = require("./routes/biodataRouter");
const tugasRouter = require("./routes/tugasRouter");
const authRouter = require("./routes/authRouter");
const classRouter = require("./routes/classRouter");

// routing
app.use("/biodata", biodataRouter);
app.use("/assignment", tugasRouter);
app.use("/user", authRouter);
app.use("/class", classRouter);

// starting server
app.listen(3000, function () {
  console.log("server listening on port 3000");
});
