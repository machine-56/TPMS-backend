const express = require('express');
const adminRouter = express.Router();
const invoiceData = require('../model/invoicedata')
const WorkorderData = require('../model/workOrderModel');
const aprUserData = require('../model/newuserModel');
const UserData=require('../model/userModel.js');
const partnerData=require('../model/partnerModel');
const partnerCounterData = require('../model/pidgenerationModel');

//insert a workorder
adminRouter.post('/insert',function(req,res){  

         var workorder = {       
            partner_name : req.body.workorder.p_name,
            partner_id : req.body.workorder.p_id,
            program_name : req.body.workorder.tp_name,
            traning_topics : req.body.workorder.t_topics,
            date_start : req.body.workorder.start,
            date_end :req.body.workorder.end,
            mode :req.body.workorder.t_mode,
            GSTno :req.body.workorder.GST,
            tax_type :req.body.workorder.taxControl,
            panNo :req.body.workorder.pan_no,
            payterms :req.body.workorder.pay_terms,
            amount :req.body.workorder.amount,
            woid :'',
            issue_date :req.body.workorder.issue_date,
            wo_status :req.body.workorder.wo_status
        }       
        var workOrder = new WorkorderData(workorder);
        workOrder.save();
     }
)


//  edit workorder
adminRouter.put('/workorders/edit', (req,res)=>{
    let uid = req.body.workorder.id;
    WorkorderData.findByIdAndUpdate({_id:uid},{$set:{
        partner_name : req.body.workorder.p_name,
            partner_id : req.body.workorder.p_id,
            program_name : req.body.workorder.tp_name,
            traning_topics : req.body.workorder.t_topics,
            date_start : req.body.workorder.start,
            date_end :req.body.workorder.end,
            mode :req.body.workorder.t_mode,
            GSTno :req.body.workorder.GST,
            tax_type :req.body.workorder.taxControl,
            panNo :req.body.workorder.pan_no,
            payterms :req.body.workorder.pay_terms,
            amount :req.body.workorder.amount,
            woid :req.body.workorder.woid,
            issue_date :req.body.workorder.issue_date,
            wo_status :req.body.workorder.wo_status
    }}).then(()=>{
        res.send();
    })
})


//delete a workorder
adminRouter.delete('workorders/remove/:id',(req,res)=>{
    let id = req.params.id;
    WorkorderData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
   })
   
//list workorder
adminRouter.get('/workorders',function(req,res){
    WorkorderData.find()
    .then(function(workorders){
        res.send(workorders);
    });
  });

  //list workorder by id
  adminRouter.get('/workorders/:id',function(req,res){
    const id = req.params.id;
    WorkorderData.findOne({"_id":id})
    .then(function(workorders){ 
        res.send(workorders);
    });
   });

//list users registered
adminRouter.get('/users',function(req,res){
    aprUserData.find()
    .then(function(users){
        res.send(users);
    });
  });

// Deny user
adminRouter.delete('/users/remove/:id', (req,res)=>{
    let id = req.params.id;
    console.log(`dropped: ${id}`);
    aprUserData.findOneAndDelete({"_id":id}).then(()=>[
        res.status(200).send()
    ])
});

// approve user
adminRouter.post('/users/apv',(req,res)=>{
console.log(req.body);
const userDetail=req.body.id;

if(userDetail.post=='Partner'){
    partnerCounterData.findOneAndUpdate(
        {id:"autoval"},
        {"$inc":{"seq":1}},
        {new:true},(err,cd)=>{
            let seqId;
            if(cd==null){
                const newval=new partnerCounterData({id:"autoval",seq:1})
                newval.save();
                seqId=1;
            }else{
                seqId=cd.seq;
            }
            var partner={
                name:userDetail.name,
                uname:userDetail.uname,
                email:userDetail.email,
                pwd:userDetail.pwd,
                post:userDetail.post,
                company:userDetail.company,
                phoneNo:userDetail.phoneNo,
                image:'',
                pan:'',
                partner_id:'ptr-'+seqId
            }
           var partnerDet = new partnerData(partner);
           partnerDet.save();
        }
    )
   
}
    var user={
        name:userDetail.name,
        uname:userDetail.uname,
        pwd:userDetail.pwd,
        post:userDetail.post,
    }
    var userDet = new UserData(user);
    userDet.save();
    aprUserData.findOneAndDelete({"_id":userDetail._id}).then(()=>[
        res.status(200).send()
    ])
})

// collect invoice data
adminRouter.get('/invoice', (req,res)=>{
    invoiceData.find().then((data)=>{
        req.send();
    })
})

// approve invoice
adminRouter.put('/invoice/apv', (req,res)=>{
    let uid = req.body.id;
    invoiceData.findOneAndUpdate({_id:uid},{$set:{invoice_status:'apvd',}})
    .then(()=>{
        res.send();
    })
})

// deny inovice
adminRouter.put('/invoice/deny', (req,res)=>{
    let uid = req.body.id;
    invoiceData.findOneAndUpdate({_id:uid},{$set:{invoice_status:'denied',}})
    .then(()=>{
        res.send();
    })
})


 module.exports=adminRouter;

