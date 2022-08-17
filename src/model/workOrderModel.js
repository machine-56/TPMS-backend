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
const Schema = mongoose.Schema;

var newWorkOrderSchema = new Schema({
    date:String,
    partner:String,
    uid:String,
    program:String,
    topic:String,
    mode:String,
    gst:String,
    pan:String,
    tds:String,
    payment:String,
    pstatus:String
})

var workOrderdata = new mongoose.model('workOrder',newWorkOrderSchema);

module.exports = workOrderdata