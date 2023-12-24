const express = require('express')
const dotenv = require("dotenv")
const mangoos=require("mongoose")
const location_router=require("./VotingLocation/VotingRouter")

const app = express()
const port = 3000
dotenv.config()
mangoos.connect(process.env.MONGODB_URL).then(()=>console.log("ok")).catch((err)=>console.log(err))
var cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api/location",location_router)
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})