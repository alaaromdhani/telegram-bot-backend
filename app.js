const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors middleware
const app = express()
const port = 80
app.use(cors({
    origin:'http://localhost:5500'
}));
app.get('/', (req, res) => {
  res.send({
    response:'ok'
  })
})



// Middleware to handle JSON requests
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})