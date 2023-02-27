const express = require("express")
const router = express.Router()

router.use(logger)

router.get('/', (req,res) => {
  res.send("Get user")
})

router.get("/new",(req,res) => {
  
  res.send("Create new user")
})

router.get("/:id", (req,res) => {
  //console.log(req.user)
  res.send(`Get user with id ${req.params.id}`)
})

router.put("/:id", (req,res) => {
  res.send(`Update user with id ${req.params.id}`)
})

router.delete("/:id",(req,res) => {
  res.send(`delete user with id ${req.params.id}`)
})

const users = [{name:"Kyle"}, {name:"Sally"}]
router.param("id",(req,res,next,id) => {
  req.user = Object.values(users[id])
  next()
})

function logger(req,res,next){
  console.log(req.originalUrl)
  next()
}

module.exports = router