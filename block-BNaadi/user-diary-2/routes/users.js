var express = require(`express`) 
var router = express.Router()
var User = require(`../models/users`)




// router.use()

router.get(`/`, (req, res) => {
    User.find({}, (err, users) => {
        if(err) console.log(err)
        console.log(users, "allusers")
        res.render(`allUsers`, {users: users})
    })
})

router.get(`/:id`, (req, res) => {
    let id = req.params.id
    User.findById(id, (err, user) => {
        if(err) console.log(err)
        res.render(`singleUser`, {user: user})
    })
})

router.post(`/`, (req, res) => {
    User.create(req.body, (err, createdUser) => {
        if(err) console.log(err)
        res.redirect(`/users`)
    })
})

router.put(`/:id`, (req, res) => {
    let id = req.params.id
    User.findByIdAndUpdate(id, req.body, (err, user) => {
        if(err) console.log(err)
        res.redirect(`/users/${id}`)
    })
})

router.delete(`/:id`, (req, res) => {
    let id = req.params.id
    User.findByIdAndDelete(id, (err, user) => {
        if(err) console.log(err)
        res.redirect(`/users`)
    })
})







module.exports = router;


