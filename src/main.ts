import express from 'express'
import {getData} from './data'

const app = express()
const port = 8080

app.get('/', (req, res) => {
  console.log(getData())
  res.send('This is NodeJS Typescript Application! Current time is ' + Date.now())
})

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`)
})
