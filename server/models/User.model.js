const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password."],
    },
    name: {
      type: String,
      required: [true, "Please enter your name."],
    },
    surname: {
      type: String,
      required: [true, "Please enter your surname."],
    },
    appointments: {
      type: Schema.Types.ObjectId, ref: "Appointment"
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;