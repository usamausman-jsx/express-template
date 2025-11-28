const app = require('express')
const router = app.Router()

const { getAllStudents } = require('../controllers/students');
router.get('/students', getAllStudents)

module.exports = router