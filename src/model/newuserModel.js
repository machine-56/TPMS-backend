const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/tpms";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected : newuser");
  })
  .catch(() => {
    console.error();
  });
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
  fullname: String,
  uname: String,
  email: String,
  pwd: String,
  post: String,
  compname: String,
  phoneNo: Number,
});

var newUserdata = mongoose.model("newUsers", NewUserSchema);

module.exports = newUserdata;
