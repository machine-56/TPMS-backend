const express = require('express');
// const workOrderdata = require('../model/workOrderModel');
const financeRouter = express.Router();
const workorderdata = require('../model/workOrderModel');
const invoicedata = require('../model/invoicedata')


// workorder list display
financeRouter.get('/workorder',(req,res)=>{
    workorderdata.find().then((data)=>{
        res.send(data);
    })
    .catch(()=>{
        res.status(Error).send();
    })
})

// single view workorder
financeRouter.post('/workorder/each',(req,res)=>{
    let wid = req.body.woid;
    workorderdata.findOne({"woid":wid})
    .then((data)=>{
        res.send(data);
    })
    .catch(()=>{
        res.send(Error).send();
    })
})

// approve workrder
financeRouter.put('/workorder/apv', (req,res)=>{
    let data = req.body.id;
    console.log(data);
    workorderdata.findOneAndUpdate({"_id":data},
    {$set:{wo_status:'apvd'},})
    .then((data)=>{
        console.log(data)
        res.send();
    })
})

// Deny work order
financeRouter.delete('/workorder/remove/:id', (req,res)=>{
    let id = req.params.id;
    console.log(`dropped: ${id}`);
    workorderdata.findOneAndDelete({"_id":id}).then(()=>[
        res.status(200).send()
    ])
})


module.exports = financeRouter;