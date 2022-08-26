const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:fP0q2vmEmkdbplTP@tpmsp.owpkdym.mongodb.net/MDB";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected : invoice');
})
.catch(()=>{
    console.error(Error);
})
const Schema = mongoose.Schema;

var NewInvoiceSchema = new Schema({
    
})

var Invoicedata = new mongoose.model('invoicedata',NewInvoiceSchema);

module.exports = Invoicedata