const express = require("express");
const router = express.Router();



router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// DOCTORS

const Doctor = require ("../models/Doctor.model")

// Show all doctors

router.get("/alldocs", (req, res, next) => {
  Doctor.find({})
    .then((alldocs) => {
      res.status(200).json(alldocs);
      console.log(alldocs)
    })
    .catch((error) => {
      next(error)
    });
});

// Show 1 doctor by id

router.get("/:doctorId", (req, res, next) => {

  Doctor.findById(req.params.doctorId)
    .then((doctorIdFind) => {
      res.status(200).json(doctorIdFind)
    })
    .catch((error) => {
      next(error)
    })
})

//Update doctor

router.put("/:doctorId", (req, res) => {

  Doctor.findByIdAndUpdate(req.params.doctorId, req.body, { new: true })
    .then((doctorIdUpdate) => {
      res.status(200).json(doctorIdUpdate)
    })
    .catch((error) => {
      next(error)
    })
})

// USERS

const User = require ("../models/User.model")

// create user

router.post("/signup", (req, res, next) => {

  User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
  })
    .then((createdUser) => {
      console.log("User created ->", createdUser);
      res.status(201).json(createdUser);
    })
    .catch((err) => {
      next(err)
    });
});

// delete user

router.delete("/api/cohorts/:cohortId", (req, res) => {

  Cohort.findByIdAndDelete(req.params.cohortId)
    .then((cohortIdDelete) => {
      res.status(200).json(cohortIdDelete)
    })
    .catch((error) => {
      next(error)
    })
})

// DOCTORS

const Appointment = require ("../models/Appointment.model")

// create one appointment

router.get("/appoint/:id", (req, res) => {
  const docId = req.params.id;
 
  Appointment.findById(docId)
    .populate("user") // Replaces the author ObjectId with the full author document
    .populate("doc")
    .then((book) => {
      console.log("Retrieved book with author details ->", book);
 
      res.status(200).json(book);
    })
    .catch((error) => {
      console.error("Error while retrieving book ->", error);
      res.status(500).json({ error: "Failed to retrieve book" });
    });
});

// router.get("/appoint/:id", (req, res) => {
//   const docId = req.params.id;
 
//   Appointment.create(docId)
//     .populate("user")
//     .populate("doc")
//     .then((appointment) => {
//       if (!appointment) {
//         console.log("Appointment not found");
//         return res.status(404).json({ error: "Appointment not found" });
//       }

//       console.log("Retrieved appointment with user and doctor details ->", appointment);
//       res.status(200).json(appointment);
//     })
//     .catch((error) => {
//       console.error("Error while retrieving appointment ->", error);
//       res.status(500).json({ error: "Failed to retrieve appointment" });
//     });
// });

module.exports = router;
