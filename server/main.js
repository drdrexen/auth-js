const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")

//middleware setup
app.use(express.json())
app.use(cors)


//Route


// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/authentication')
  .then(() => console.log("Connected to mongoDB"))
  .catch((error) => console.log("Couldn't connect to mongodb", error))



//Global error handler




//Server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`)


})
