const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:fP0q2vmEmkdbplTP@tpmsp.owpkdym.mongodb.net/TPMSP";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected : invoice');
})
.catch(()=>{
    console.error();
})
const Schema = mongoose.Schema;

var newInvoiceSchema = new Schema({
    
})

var invoicedata = new mongoose.model('invoicedata',newInvoiceSchema);

module.exports = invoicedata