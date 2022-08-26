const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:fP0q2vmEmkdbplTP@tpmsp.owpkdym.mongodb.net/TPMSP";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected : newuser');
})
.catch(()=>{
    console/log('error : newuser');
    // console.error();
})
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    name:String,
    uname:String,
    pwd:String,
    post:String
})

var newUserdata = new mongoose.model('newuserdata',NewUserSchema);

module.exports = newUserdata