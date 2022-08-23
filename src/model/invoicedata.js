const mongoose = require('mongoose');
const uri = "";
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

var invoicedata = new mongoose.model('invoice',newInvoiceSchema);

module.exports = invoicedata