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
    woid:String,
    issue_date : Date,
    partner_name : String,
    partner_id : String,
    program_name : String,
    traning_topics : String,
    date_start : Date,
    date_end : Date,
    mode : String,
    GSTno : String,
    tax_type : String,
    panNo : String,
    amount:Number,
    payterms : String,
    wo_status:String

})


var workOrderdata = new mongoose.model('workorders',newWorkOrderSchema,'workorders');

module.exports = workOrderdata
