const express = require('express')
const app = express()

app.set("view engine", "ejs")


app.use(express.static("public"))

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000)




