const express = require("express")
const app = express()

app.set("view engine", 'ejs')
app.use(express.static("public"))
app.use(express.json())

app.use(express.urlencoded( {extended: true} ))

//app.get('/', (req,res) => {
  //res.render('index', { text:'World'} )
//})

const userRouter = require("./routes/users.js")
app.use("/users", userRouter)


app.listen(3000)




