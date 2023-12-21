const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/register")
    .then(() => (console.log("mongodb connected"))).catch((err) => err.message)
