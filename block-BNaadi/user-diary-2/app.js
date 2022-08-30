var express = require(`express`)
var mongoose = require(`mongoose`)
var path = require(`path`)
var app = express();

//connecting routers

var userRouter = require(`./routes/users`)
var indexRouter = require(`./routes/index`)

//Connecting server to Mongoose

mongoose.connect(`mongodb://127.0.0.1:27017/users`, (err) => {
    console.log(err ? err : `connected successfully`)
})



//Views Engine

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//Handling Middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes

app.use(`/`, indexRouter)
app.use(`/users`, userRouter)


//error handler

app.use((req, res, next) => {
    res.send(`404 Page Not Found`)
})


app.listen(5000, () => {
    console.log(`Server listening on port 5K`)
})

