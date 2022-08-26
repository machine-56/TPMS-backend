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
    console.error(Error);
})
const Schema = mongoose.Schema;

var NewApvUserSchema = new Schema({
    name:String,
    uname:String,
    pwd:String,
    post:String
})

var ApvUserdata = new mongoose.model('apvuserdata',NewApvUserSchema);

module.exports = ApvUserdata