const express = require('express');
const router = express.Router();
const Worker = require('../record/worker');
const mongoose = require('mongoose');
const worker = require('../record/worker');


router.get('/',(req,res,next)=>{
    Worker.find()                          //give whole data//
    .then(result=>{
        res.status(200).json({
            workerData:result
        });
    })
    .catch (err =>{
    console.log(err);
    res.status(500).json({
        error:err
    })
  });
});

//get by id request

router.get('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Worker.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            worker:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

//post request
router.post('/',(req,res,next)=>{
    const worker = new Worker({
        _id:new mongoose.Types.ObjectId,
        Name:req.body.Name,
        Age:req.body.Age,
        Contact:req.body.Contact,
        gender:req.body.gender
    })

    worker.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newWorker:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err

        })

    })
})

//delete

router.delete('/:id',(req,res,next)=>{
    Worker.deleteOne({_id: req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'worker ID deleted',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

//put

router.put ('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Worker.findByIdAndUpdate({_id: req.params.id},{
        $set:{
            Name:req.body.Name,
            Age:req.body.Age,
            Contact:req.body.Contact,
            gender:req.body.gender
        }
    })
    .then(result=>{
        res.status(200).json({
            ID_Updated:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})


module.exports = router;