const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../record/user');
const bcrypt = require('bcrypt');

router.post('/',(req,res,next)=>{
    bcrypt.hash(req.body.password,10,(err, hash)=>{
        if(err)
        {
            return res.status(500).json({
                error:err
            })
        }
        else
        
        {
         const user = new User({

            _id: new mongoose.Schema.Types.ObjectId,
            username:req.body.username,
            password:hash,
            contact:req.body.contact,
            email:req.body,email

                })
                user.save()
                .then(result=>{
                    res.status(200).json({
                        new_user:result
                    })
                })
                .catch(err=>{
                    res.status(500).json({
                        error:err
                    })
                })
            }


    })


})




module.exports = router;