var express = require(`express`)
var mongoose = require(`mongoose`)
var path = require(`path`)

var Student = require(`./models/student`)


mongoose.connect(`mongodb://127.0.0.1:27017/sample`, (err) => {
    console.log(err ? err : "connected successfully")
})


var app = express()

//setup EJS

app.set("views engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//adding middleware

app.use(express.json())


//adding routes

app.get(`/students/new`, (req, res) => {
    res.locals.message = "Form here"
    res.render(`form.ejs`)
})

app.post(`/students`, (req, res) => {
    Student.create(req.body)
    res.render(req.body)
})


app.get(`/students`, (req, res) => {
    res.render("form.ejs", { list: ["ankit", "suraj", "prashant", "ravi"] });

})

app.get(`/students/:id`, (req, res) => {
    Student.findById(req.params.id, (err, obj)  => {
        if(err) console.log(err)
        res.render("index.ejs", {
            student: { name: "rahul", age: 20 },
          });
    })
    

})

app.listen(4000, () => {
    
    console.log(`Server listening on port 4K`)
})