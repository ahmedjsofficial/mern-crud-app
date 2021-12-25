const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const studentData = require("../src/StudentSchema.js");

router.route('/CreateStudent').post((req, res, next) => {
    studentData.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})
//Read Students
router.route("/").get((req, res) => {
    studentData.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// get single student
router.route('/EditStudent/:id').get((req,res)=>{
    studentData.findById(req.params.id, (error,data)=>{
        if(error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})

router.route('/UpdateStudent/:id').put((req, res, next)=>{
    studentData.findOneAndUpdate(req.param.id, {
        $set: req.body
    },(error,data)=>{
        if(error){
            return next(error);
            console.log(error);
        } else {
            res.json(data);
            console.log("Student Updated Successfully");
        }
    })
})

// Deconste student
router.route('/DelteStudent/:id').delete((req, res, next) => {
    studentData.findOneAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;