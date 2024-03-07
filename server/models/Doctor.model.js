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
            type: Object,
            properties: {
                Monday: { type: String, enum: ['08:00 - 16:00', '08:30 - 16:30'] },
                Tuesday: { type: String, enum: ['08:00 - 16:00'] },
                Wednesday: { type: String, enum: ['09:00 - 17:00'] },
                Thursday: { type: String, enum: ['10:00 - 18:00'] },
                Friday: { type: String, enum: ['09:30 - 17:30'] },
                Saturday: { type: String, enum: ['09:30 - 17:30'] },
            },
            //required: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        reviews: Array,

        // this second object adds extra properties: `createdAt` and `updatedAt`
        //timestamps: true,
    }
);

const Doctor = model("Doctor", doctorSchema);

module.exports = Doctor;