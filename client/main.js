const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")

//middleware setup
app.use(express.json())
app.use(cors)


//Route


// MongoDB Connection



//Global error handler




//Server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`)


})
