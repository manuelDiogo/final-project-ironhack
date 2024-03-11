const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// USERS

const User = require("../models/User.model")

// create user

// router.post("/signup", (req, res, next) => {

//   User.create({
//     email: req.body.email,
//     password: req.body.password,
//     name: req.body.name,
//     surname: req.body.surname,
//     appointments: req.body.appointments,
//   })
//     .then((createdUser) => {
//       console.log("User created ->", createdUser);
//       res.status(201).json(createdUser);
//     })
//     .catch((err) => {
//       next(err)
//     });
// });

// delete user

// create one appointment

// router.post("/:docId/appoint", (req, res) => {
//   const { docId } = req.params;
//   const {  } = req.body;
// })

// router.post("/:doctorId/appointments", (req, res) => {
//   const { doctorId } = req.params;
//   const { user, doc, day } = req.body;

//   Appointment.create({ user:user._id, doc: doc._id, day })
//     .then((newAppointment) => {
//       return newAppointment
//         .findByIdAndUpdate(doctorId, {$push: { appointments: newAppointment._id }}, {new: true})
//     })
//     .then((response) => res.json(response))
//     .catch((error) => res.json(error));
// });

// router.post("/:doctorId/appointments", (req, res) => {
//   const { doctorId } = req.params;
//   const { day } = req.body;

//   Appointment.create({ user: user._id, doc: doc._id, day })
//     .then((newAppointment) => {

//       return Doctor.findByIdAndUpdate(
//         doctorId,
//         { $push: { appointments: newAppointment._id } },
//         { new: true }
//       );
//     })
//     .then((updatedDoctor) => res.json(updatedDoctor))
    
//     .catch((error) => res.status(500).json({ error: "Internal server error" })
//     );
// });

/*router.post("/:doctorId/appointments", (req, res) => {
  const { doctorId } = req.params;
  const { userId, docId, day } = req.body;

  Appointment.create({ user: userId, doc: docId, day })
    .then((newAppointment) => {
      return Doctor.findByIdAndUpdate(
        doctorId,
        { $push: { appointments: newAppointment._id } },
        { new: true }
      );
    })
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/appointments/:appointmentsId", (req, res) => {
  const { appointmentsId } = req.params;
  //const { user, doc, day } = req.body;

  Appointment.findByIdAndUpdate(appointmentsId)
    .populate("user")
    .populate("doc")
    .then((fullAp) => res.json(fullAp))
    .catch((error) => res.json(error));
})*/

// router.get("/:doctorId", (req, res) => {
//   const doctorId = req.params.id
//   const { user, doc, hour } = req.body;

//   Appointment.create({ user, doc, hour, doctor: doctorId })
//   .populate("user")
//   .then((doctor) => {
//     console.log("Retrieved book with author details ->", doctor);

//     res.status(200).json(doctor);
//   })
//   .catch((error) => {
//     console.error("Error while retrieving book ->", error);
//     res.status(500).json({ error: "Failed to retrieve book" });
//   });
// });






// router.post("/:doctorId/appointments", (req, res) => {
//   const { doctorId } = req.params;
//   const { user, doc, day } = req.body;

//   Appointment.create({ user, doc, day })
//     .then((newAppointment) => {


//     .then((response) => res.json(response))
//     .catch((error) => res.json(error));
// });



// return newAppointment
//         .findByIdAndUpdate(doctorId, {
//           $push: { appointments: newTask._id },
//         })

/*router.delete("/appointments/:appointmentsId", (req, res) => {

  Appointment.findByIdAndDelete(req.params.appointmentsId)
    .then((cohortIdDelete) => {
      res.status(200).json(cohortIdDelete)
    })
    .catch((error) => {
      next(error)
    })
})*/


module.exports = router;