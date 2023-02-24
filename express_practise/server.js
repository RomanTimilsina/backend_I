const express = require("express")
const app = express();

app.get('/', (req, res) => {
  res.download()
})

app.listen(3001)