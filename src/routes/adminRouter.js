const express = require('express');
const adminRouter = express.Router();
const WorkorderData = require('../model/workOrderModel');
const CounterData = require('../model/woidgenerationModel');
//insert a workorder
adminRouter.post('/insert',function(req,res){  
    //console.log(req.body);
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
            woid :'WO/'+req.body.workorder.p_name+'/woid-00'+seqId,
            issue_date :req.body.workorder.issue_date,
            wo_status :req.body.workorder.wo_status
        }       
        var workOrder = new WorkorderData(workorder);
        workOrder.save();
     }
 )
 });
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
    // console.log(id);
    WorkorderData.findOne({"_id":id})
     .then(function(workorders){ 
       res.send(workorders);
     });
   });


 module.exports=adminRouter;

