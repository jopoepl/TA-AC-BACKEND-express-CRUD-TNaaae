var express = require(`express`)
var mongoose = require(`mongoose`)
var path = require(`path`)

var app = express();

//connecting to mongoose

mongoose.connect(`mongodb://127.0.0.1:27017/users`, (err) => {
    console.log(err? err: `Connected successfully`)

})

//handling routers
var indexRouter = require(`./routes/index`)
var userRouter = require(`./routes/user`)

//setting views engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//handling middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(`/`, indexRouter)
app.use(`/users`, userRouter)








app.listen(2000, () => {
    console.log(`Server lsitneing on port 2K`)
})

