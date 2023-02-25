const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.send("users List")
})

router.get('/new', (req, res) => {
  res.send("users new")
})

module.exports = router