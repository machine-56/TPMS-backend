const mongoose = require("mongoose");
const uri =
  "mongodb+srv://superadmin:F5nxY3vdwVsNg0uq@tpmsp-db.s5zticr.mongodb.net/TPMS";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected : invoice");
  })
  .catch(() => {
    console.error(Error);
  });
const Schema = mongoose.Schema;

var NewInvoiceSchema = new Schema({
  // invoice_id: String,
  // partner_name: String,
  // amount: String,
  woid: String,
  invono: String,
  invodate: Date,
  duedate: Date,
  fileName: String,
  paystatus:String,
});

var Invoicedata = new mongoose.model("invoicedata", NewInvoiceSchema);

module.exports = Invoicedata;
