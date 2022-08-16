const express =  require('express');
const cors = require('cors');
const path = require('path');

const userdata = require('./src/model/userModel');
const workOrderdata = require('./src/model/workOrderModel')
const invoicedata = require('./src/model/invoicedata')

const PORT = process.env.PORT || 4156
const app = new express;

// app.use(express.static(''))

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())


//login
app.post('/api/login',(req,res)=>{
    var data = req.body;
    var flag=false;
    var post;
    userdata.find().then((user)=>{
        for(let i=0; i<user.length;i++){
            if(data.username===user[i].username && data[i].pwd===user.pwd){
                flag=true;
                post=user[i].post;
                break;
            }
            else if(i==user.length-1){
                flag=false;
            }
        }
        if(flag!=false){
            res.status(200).send(post);
        }
        else{
            res.status(404).send('user not found');
        }
    })
})


// sign up
app.post('/api/signup',(req,res)=>{
    var newUser={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        pwd:req.body.pwd,
        company:req.body.company,
        post:req.body.post,
    }
    console.log(newUser);                 //---- remove, for sign up data reach verification
    const user = new userdata(newUser)
    user.save();
    res.status(200).send()
})


// ----admin----
// work order
app.post('/api/adminnewwo',(req,res)=>{
    var newWorkOrder={
        date:req.body.date,
        partner:req.body.partner,
        uid:req.body.uid,
        program:req.body.program,
        topic:req.body.topic,
        mode:req.body.mode,
        gst:req.body.gst,
        pan:req.body.pan,
        tds:req.body.tds,
        payment:req.body.payment,
        pstatus:req.body.pstatus
    }
    console.log(newWorkOrder);             //---- remove,  conformation
    var workOrder = new workOrderdata(newWorkOrder)
    workOrder.save()
    res.status(200).send()
})

// invoice request
app.get('/api/adminnewinvoice',(req,res)=>{
    invoicedata.find().then((data)=>{
        res.send(data)
    })
})

// payment status
app.get('/api/adminpaystatus',(req,res)=>{
    workOrderdata.find({"status":paid})
    .then((data)=>{
        res.send(data)
    })
})
// --- /admin ----

// ---- partner ----
// main view
app.get('/api/:id',(req,res)=>{
    const uid = req.params.id;
    workOrderdata.find({"uid":uid})
    .then((data)=>{
        res.send(data)
    })
})

// send invoice
app.post('/api/partnerinvoice',(req,res)=>{
    var newInvoice = {
        woid:req.body.woid,
        invono:req.body.invono,
        invodate:req.body.invodate,
        duedate:req.body.duedate,
        file:req.body.file
    }
    console.log(newInvoice);                //---remove, conformation
    var invoice = new invoicedata(newInvoice)
    invoicedata.save()
    res.status(200).send()
})
// ---- /partner ----

//---- finance ----
app.get('api/finance',(req,res)=>{
    workOrderdata.find()
    .then((data)=>[
        res.status(200).send(data)
    ])
})

// paying a partner
app.put('/api/financepay',(req,res)=>{
    (uid=req.body.uid),
    workOrderdata.findAndUpdate({"uid":uid},{set:{"pstatus":paid}})
    .then(()=>{
        res.send()
    })
})
//---- /finance ----



app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'))
});

app.listen(PORT,()=>{
    console.log(`app listening to port : ${PORT}`)
});