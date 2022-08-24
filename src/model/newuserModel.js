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
    uname:String,
    pwd:String,
    post:String
})

var newUserdata = new mongoose.model('newUsers',NewUserSchema);

module.exports = newUserdata