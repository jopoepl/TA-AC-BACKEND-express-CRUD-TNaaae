var express = require(`express`)
var mongoose = require(`mongoose`)
var path = require(`path`)
var userRouter = require(`./routes/users.js`)
var indexRouter = require(`./routes/index.js`)

mongoose.connect(`mongodb://127.0.0.1:27017/sample`, (err) => {
    if (err) console.log(err)
})

var app = express()

//handle middleware

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "views"))

//models

app.use((req, res, next) => {
    console.log(req.url, req.method)
    next()
})

app.use(`/users`, userRouter)

app.use(`/`, indexRouter)







app.listen(4000, () => {
    console.log(`Server listening on port 4000`)
})