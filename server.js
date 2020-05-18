const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req,res) => {
  console.log("The server is running on "+ PORT);
})
