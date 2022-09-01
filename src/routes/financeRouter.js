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
    console.log(data);    //=================
    CounterData.findOneAndUpdate(
        {id:"autoval"},
        {"$inc":{"seq":1}},
        {new:true},(err,cd)=>{
            let seqId;
            if(cd==null){
                const newval=new CounterData({id:"autoval",seq:1})
                newval.save();
                seqId=1;
            }else{
                seqId=cd.seq;
            }
            workorderdata.findOneAndUpdate({"_id":data},
            {$set:{wo_status:'apvd', woid :'WO/'+req.body.workorder.p_name+'/woid-00'+seqId},})
            .then((data)=>{
                console.log(data)
                res.send();
        })
    });
})

// Deny work order
financeRouter.delete('/workorder/remove/:id', (req,res)=>{
    let id = req.params.id;
    console.log(`dropped: ${id}`);
    workorderdata.findOneAndDelete({"_id":id}).then(()=>[
        res.status(200).send()
    ])
})

// payment remittance detials
financeRouter.get('/payment', (req,res)=>{
    invoicedata.find().then((data)=>{
        res.send(data);
    })
    .catch(()=>{
        console.error();
        res.send();
    })
})

// pay
financeRouter.put('/payment/pay', (req,res)=>{
    let id = req.body.id;
    invoicedata.findOneAndUpdate({"_id":id},
    {$set:{status:'paid'},})

})

financeRouter.get('/invoice/:id', (req,res)=>{
    let ui = req.params.id;
    invoicedata.findOne({"fileName":ui+'.pdf'}).then((data)=>{
        res.send();
    })
})

module.exports = financeRouter;