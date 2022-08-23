const express =  require('express');
const cors = require('cors');
const path = require('path');

const userdata = require('./src/model/userModel');
const workOrderdata = require('./src/model/workOrderModel')
const invoicedata = require('./src/model/invoicedata')

const PORT = process.env.PORT || 4156
const app = new express;

const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
const adminRouter = require('./src/routes/adminRoutes');
const financeRouter = require('./src/routes/financeRoutes');
const partnerRouter = require('./src/routes/partnerRoutes');


// app.use(express.static(''))

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/admin', adminRouter);
app.use('/finance', financeRouter);
app.use('/partner', partnerRouter);




// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/frontend/index.html'))
// });

app.listen(PORT,()=>{
    console.log(`app listening to port : ${PORT}`)
});