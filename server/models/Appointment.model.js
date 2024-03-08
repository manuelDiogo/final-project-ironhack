const { Schema, model } = require("mongoose");

const appointSchema = new Schema(

    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        doc: { type: Schema.Types.ObjectId, ref: "Doctor" },
        day: String,
    }
);

const Appointment = model("Appointment", appointSchema);

module.exports = Appointment;