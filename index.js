const express = require('express')
const morgan = require('morgan')
const router = require('./routers')
const cookieParser = require("cookie-parser")
const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(morgan("dev"))
app.use(cookieParser());
app.use(express.static('public'))
app.use(router)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(favicon(path.join(__dirname,'public','favicon.ico')));


app.get(("/"), (req, res)=>{
  res.render("homepage", {data:""})
})


app.listen(port, () =>{
  console.log(`App listening on: http://localhost:${port}`)
})