const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:fP0q2vmEmkdbplTP@tpmsp.owpkdym.mongodb.net/TPMSP";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected : partner');
})
.catch(()=>{
    console.log('Error : partner');
    // console.error();
})
const Schema = mongoose.Schema;

var NewPartnerSchema = new Schema({
    name:String,
    username:String,
    pwd:String,
    post:String,
    id:String,
    pan:String,
    email:String,
    phno:Number,
    company:String

})

var Partnerdata = new mongoose.model('partner',NewPartnerSchema);

module.exports = Partnerdata
