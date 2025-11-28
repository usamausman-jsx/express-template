const express = require('express')
const students = require('./routes/students');
const { logging } = require('./middlewares/logging')
const app = express()
const port = 3000

app.use(express.json());
app.use(logging);
app.use('/api', students);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
