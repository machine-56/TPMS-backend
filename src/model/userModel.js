const mongoose = require('mongoose');
const uri = "";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected : user');
})
.catch(()=>{
    console.error();
})
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    name:String,
    pwd:String,
    post:String
})

var Userdata = new mongoose.model('user',NewUserSchema);

module.exports = Userdata