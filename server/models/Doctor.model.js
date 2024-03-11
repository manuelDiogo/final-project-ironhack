const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
    {
        doctor_name: String,

        place_of_activity: String,

        city: {
            type: String, enum: ["Lisbon", "Porto", "Faro", "Braga", "Coimbra", "Barreiro"],
        },
        specialty: {
            type: String, enum: ["Neurology", "Gynecology", "Urology", "Ophthalmology", "Pulmonology", "Cardiology", "Dermatology", "Pediatrics", "Orthopedics", "Family Medicine"]
        },
        healthcare_insurance: {
            type: String, enum: ["Multicare", "médis", "ADSE", "Ageas", "Tranquilidade", "Advancecare"]
        },
        working_hours: {
            type: {
                Monday: [Number],
                Tuesday: [Number],
                Wednesday: [Number],
                Thursday: [Number],
                Friday: [Number],
                Saturday: [Number]
            }
        },
        reviews: Array,
        appointments: {
            type: Schema.Types.ObjectId,
            ref: "Appointment"
        },
        // this second object adds extra properties: `createdAt` and `updatedAt`
        //timestamps: true,
    }
);

const Doctor = model("Doctor", doctorSchema);

module.exports = Doctor;