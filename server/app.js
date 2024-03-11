// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

    // Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();
/* Configure Express Server to Handle JSON Files */
/* app.use(express.json());

app.use(express.urlencoded({ extended: false }));
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const doctorRoutes = require("./routes/doctors.routes");
app.use("/api", doctorRoutes);

const appointRoutes = require("./routes/appointment.routes")
app.use("/api", appointRoutes)

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;