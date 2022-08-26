const mongoose = require('mongoose');
const uri = "";
 mongoose.connect(uri,{
     useNewUrlParser: true,
     newUnifiedTopology: true
 })
 .then(()=>{
     console.log('DB connected : work order');
 })
 .catch(()=>{
     console.error();
 })
mongoose.connect(uri);
const Schema = mongoose.Schema;

var CounterSchema = new Schema({
    id : String,
    seq : Number
});

var CounterData = new mongoose.model('counters',CounterSchema,'counters');

module.exports = CounterData
