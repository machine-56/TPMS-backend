const express = require('express');
// const workOrderdata = require('../model/workOrderModel');
const financeRouter = express.Router();
const workorderdata = require('../model/workOrderModel');
const invoicedata = require('../model/invoicedata')


// workorder list display
financeRouter.get('/workorder',(req,res)=>{
    workorderdata.find().then((data)=>{
        res.status(200).send(data);
    })
    .catch(()=>{
        res.status(Error).send();
    })
})

// single view workorder
financeRouter.post('/workorder/:id',(req,res)=>{
    let id = req.body;
    workorderdata.findOneAndUpdate({"woid":id})
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch(()=>{
        res.send(Error).send();
    })
})

// approve work order
financeRouter.put('/approve/:id',(req,res)=>{
    let id = req.params.id;
    workorderdata.findOneAndUpdate({"woid":id})
})


// payment details
financeRouter.get('/payment',(req,res)=>{
    invoicedata.find().then((data)=>{
        res.status(200).send(data);
    })
    .catch(()=>{
        res.status(Error).send();
    })
})

// payment detailed view
financeRouter.get('/payment/:id',(req,res)=>{
    let id = req.params.id;
    invoicedata.findOneAndUpdate({"invono":id},{$set:{stat:'apvd'},})
    .then((data)=>{
        let list = data.pdfurl;
        res.status(200).send(list);
    })
    .catch(()=>{
        res.status(Error).send();
    })
})

module.exports = financeRouter;