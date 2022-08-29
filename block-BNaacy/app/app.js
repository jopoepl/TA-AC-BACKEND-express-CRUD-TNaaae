var express = require(`express`)
var mongoose = require(`mongoose`)
var path = require(`path`)

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

var User = require(`./models/user`)


//routes

app.get(`/`, (req, res) => {
    res.render(`index`)
})

app.get(`/users/new`, (req, res) => {
    res.render(`form`)
})


app.post(`/users`, (req, res) => {
    console.log(req.body)
    User.create(req.create, (err, createdUser) => {
        if(err) {
            console.log(err)
            res.redirect(`/users/new`)
        } else {
            console.log(createdUser)
            res.redirect(`/`)
        }
    })

})







app.listen(4050, () => {
    console.log(`Server listening on port 4050`)
})