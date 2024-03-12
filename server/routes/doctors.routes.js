const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// DOCTORS

const Doctor = require("../models/Doctor.model")

// Show all doctors

router.get("/alldocs", (req, res, next) => {
  Doctor.find({})
    .then((alldocs) => {
      res.status(200).json(alldocs);
      //console.log(alldocs)
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

// Update doctor

router.put("/:doctorId", (req, res) => {

  Doctor.findByIdAndUpdate(req.params.doctorId, req.body, { new: true })
    .then((doctorIdUpdate) => {
      res.status(200).json(doctorIdUpdate)
    })
    .catch((error) => {
      next(error)
    })
})

// Get doc by day of the week

// const query = Character.find({ name: 'Jean-Luc Picard' });
// query.getFilter();

// const today = new Date();

//     const weekDay = today.getDay();

//     console.log(today)

router.get("/docsbyweekday/:weekDay", (req, res, next) => {

  const { weekDay } = req.params;

  if (weekDay == 1) {

    Doctor.find({ 'working_hours.Monday': { $exists: true } })
      .then((docWeekDay) => {
        res.status(200).json(docWeekDay)
      })
      .catch((error) => {
        next(error)
      })
  }

  if (weekDay == 2) {

    Doctor.find({ 'working_hours.Tuesday': { $exists: true } })
      .then((docWeekDay) => {
        res.status(200).json(docWeekDay)
      })
      .catch((error) => {
        next(error)
      })
  }

  if (weekDay == 3) {

    Doctor.find({ 'working_hours.Wednesday': { $exists: true } })
      .then((docWeekDay) => {
        res.status(200).json(docWeekDay)
      })
      .catch((error) => {
        next(error)
      })
  }

  if (weekDay == 4) {

    Doctor.find({ 'working_hours.Thursday': { $exists: true } })
      .then((docWeekDay) => {
        res.status(200).json(docWeekDay)
      })
      .catch((error) => {
        next(error)
      })
  }

  if (weekDay == 5) {

    Doctor.find({ 'working_hours.Friday': { $exists: true } })
      .then((docWeekDay) => {
        res.status(200).json(docWeekDay)
      })
      .catch((error) => {
        next(error)
      })
  }

  if (weekDay == 6) {

    Doctor.find({ 'working_hours.Saturday': { $exists: true } })
      .then((docWeekDay) => {
        res.status(200).json(docWeekDay)
      })
      .catch((error) => {
        next(error)
      })
  }
})

// Delete Doctor

router.delete("/:doctorId", (req, res, next) => {
  const { doctorId } = req.params;

  Doctor.findByIdAndDelete(doctorId)
    .then(() => {
      res.json({ message: "doctor deleted" });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;