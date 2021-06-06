const express = require("express");
const app = express();
const cors = require("cors");

require("./config/db");

// parsing body request
app.use(express.json());
app.use(cors());
// app.use(app.router);
// include router
const biodataRouter = require("./routes/biodataRouter");
const tugasRouter = require("./routes/tugasRouter");
const userRouter = require("./routes/userRouter");
const classRouter = require("./routes/classRouter");
const repoRouter = require("./routes/repoRouter");


// routing
app.use("/biodata", biodataRouter);
app.use("/assignment", tugasRouter);
app.use("/user", userRouter);
app.use("/class", classRouter);
app.use("/repo", repoRouter);


// starting server
app.listen(process.env.PORT || 8888, function () {
  console.log(`server listening on port ${process.env.PORT || 8888}`);
});
