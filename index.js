const mongoose = require('mongoose');
const express = require('express')
const students = require('./routes/students');
require('dotenv').config()
const { logging } = require('./middlewares/logging')
const app = express()
const port = 3000

app.use(express.json());
app.use(logging);
app.use('/api', students);

app.listen(port, async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB Connected Successfully , app listening on port ${port}`)
  } catch (error) {
    console.log(error)
  }
})
