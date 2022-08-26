const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/tpms";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected :partner");
  })
  .catch(() => {
    console.error();
  });
const Schema = mongoose.Schema;

var NewPartnerSchema = new Schema({
  name: String,
  username: String,
  pwd: String,
  post: String,
  id: String,
  pan: String,
  email: String,
  phno: Number,
  company: String,
});

var Partnerdata = mongoose.model("user", NewPartnerSchema);

module.exports = Partnerdata;
