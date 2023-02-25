const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send("User List")
})

router.get('/new', (req, res) => {
  res.send('Users new')
})

router.post('/', (req, res) => {
  res.send("Create User")
})

router
.route("/:id")
.get((req, res) => {
  console.log(req.user)
  res.send(`Get User with Id ${req.params.id}`)
})
.put((req, res) => {
  res.send(`Update request with id ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Delete request with id ${req.params.id}`)
})

const users = [{name:"Mally"},{name:"Kally"}]
router.param("id", (req,res,next,id) => {
req.user = users[id]
next()
})

module.exports = router


