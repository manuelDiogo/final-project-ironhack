const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json("All good in here");
});

// APPOINTMENTS

const Appointment = require("../models/Appointment.model")

const Doctor = require("../models/Doctor.model")

const User = require("../models/User.model")

// Show all appointments (NOT WORKING)

router.get("/appointments", (req, res, next) => {
    Appointment.find({})
        .then((allappoint) => {
            res.status(200).json(allappoint);
        })
        .catch((error) => {
            next(error)
        });
});

// Create an appointment step 1

router.post("/appointments", (req, res) => {
    const { userId, docId, day } = req.body;

    let appointmentId;

    Appointment.create({ user: userId, doc: docId, day })
        .then((newAppointment) => {
            appointmentId = newAppointment._id;
            return Doctor.findByIdAndUpdate(
                docId,
                { $push: { appointments: appointmentId } },
                { new: true }
            );
        })
        .then(() => {
            return User.findByIdAndUpdate(
                userId,
                { $push: { appointments: appointmentId } },
                { new: true }
            );
        })
        .then((response) => res.json(response))
        .catch((error) => res.json(error));
});

router.get("/appointments/:appointmentsId", (req, res) => {
    const { appointmentsId } = req.params;
    //const { user, doc, day } = req.body;
    Appointment.findById(appointmentsId)
        .populate("user")
        .populate("doc")
        .then((fullAp) => res.json(fullAp))
        .catch((error) => res.json(error));
})

router.delete("/appointments/:appointmentsId", (req, res) => {

    Appointment.findByIdAndDelete(req.params.appointmentsId)
        .then((cohortIdDelete) => {
            res.status(200).json(cohortIdDelete)
        })
        .catch((error) => {
            next(error)
        })
})

module.exports = router;

// router.post("/:doctorId", (req, res) => {
//     const { doctorId } = req.params;
//     const { userId, docId, day } = req.body;

//     Appointment.create({ user: userId, doc: docId, day })
//         .then((newAppointment) => {
//             return Doctor.findByIdAndUpdate(
//                 doctorId,
//                 { $push: { appointments: newAppointment._id } },
//                 { new: true }
//             );
//         })
//         .then((response) => res.json(response))
//         .catch((error) => res.json(error));
// });

// router.put("/:appointmentsId", (req, res) => {
//     const { appointmentsId } = req.params;
//     //const { user, doc, day } = req.body;

//     Appointment.findByIdAndUpdate(appointmentsId)
//         .populate("user")
//         .populate("doc")
//         .then((fullAp) => res.json(fullAp))
//         .catch((error) => res.json(error));
// })

// Create an appointment step 2