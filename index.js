require('dotenv').config()
import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send('<h1>pakitan zindabad han or rahe ga<h1/>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})