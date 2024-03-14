const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

router.get("/", (req, res, next) => {
    res.json("All good in here");
});

// APPOINTMENTS

const Appointment = require("../models/Appointment.model")

const Doctor = require("../models/Doctor.model")

const User = require("../models/User.model")

// get  user

router.get("/user/:userId", (req, res, next) => {

    User.findById(req.params.userId)
        .populate({
            path: "appointments",
            populate:{
                path: "doc",
                model: "Doctor"
            }
        })
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            next(error)
        })

})

// Project.find(query)
//   .populate({ 
//      path: 'pages',
//      populate: {
//        path: 'components',
//        model: 'Component'
//      } 
//   })
//   .exec(function(err, docs) {});

// get 

// router.get("/appointments/:appointmentsId", (req, res) => {
//     const { appointmentsId } = req.params;
//     console.log(req.params)
//     //const { user, doc, day } = req.body;
//     Appointment.findById(appointmentsId)
//         .populate("user")
//         .populate("doc")
//         .then((fullAp) => res.json(fullAp))
//         .catch((error) => res.json(error));
// })

module.exports = router;

// router.get("/:doctorId", (req, res, next) => {

//     Doctor.findById(req.params.doctorId)
//       .then((doctorIdFind) => {
//         res.status(200).json(doctorIdFind)
//       })
//       .catch((error) => {
//         next(error)
//       })
//   })