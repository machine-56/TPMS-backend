const express = require("express");
const cors = require("cors");
// const path  = require("path")

const PORT = process.env.PORT || 4156;
const app = new express();

const loginRouter = require("./src/routes/loginRouter");
const signupRouter = require("./src/routes/signupRouter");
const adminRouter = require("./src/routes/adminRouter");
const financeRouter = require("./src/routes/financeRouter");
const partnerRouter = require("./src/routes/partnerRouter");

// app.use(express.static(''))

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/login", loginRouter);
app.use("/api/signup", signupRouter);
app.use("/api/admin", adminRouter);
app.use("/api/finance", financeRouter);
app.use("/api/partner", partnerRouter);

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/frontend/index.html'))
// });

app.get("/", (req, res) => {
  console.log("index.js get reqst running");

  res.send("Hello from Home Page.");
});

app.listen(PORT, () => {
  console.log(`app listening to port : ${PORT}`);
});
