const mongoose = require('mongoose');
const uri = "mongodb+srv://superadmin:F5nxY3vdwVsNg0uq@tpmsp-db.s5zticr.mongodb.net/TPMS";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('DB connected : partner');
})
.catch(()=>{
    console.error(Error);
})
const Schema = mongoose.Schema;

var NewPartnerSchema = new Schema({
  name: String,
  uname: String,
  pwd: String,
  post: String,
  id: String,
  pan: String,
  email: String,
  phno: Number,
  company: String,
  image:String
})

var Partnerdata = new mongoose.model('partner',NewPartnerSchema);

module.exports = Partnerdata;
