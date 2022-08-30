var express = require(`express`)
var router = express.Router()
var User = require(`../models/user`)

router.get(`/`, (req, res) => {
    User.find({}, (err, allusers) => {
        if(err) console.log(err)
        res.render(`allUsers`, {users: allusers})
    })
})

router.get(`/add`, (req, res) => {
    User.find({}, (err, allusers) => {
        if(err) console.log(err)
        res.render(`addUser`)
    })
})


router.get(`/:id`, (req, res) => {
    let id = req.params.id
    User.findById(id, (err, user) => {
        if(err) console.log(err)
        res.render(`singleUser`, {user: user})
    })
})

router.get(`/:id/edit`, (req, res) => {
    let id = req.params.id
    User.findById(id, (err, user) => {
        if(err) console.log(err)
        res.render(`updateUser`, {user: user})
    })
})

router.post(`/:id/edit`, (req, res) => {
    let id = req.params.id
    User.findByIdAndUpdate(id, req.body, (err, user) => {
        if(err) console.log(err)
        res.redirect(`/users`)
    })
})

router.get(`/:id/delete`, (req, res) => {
    let id = req.params.id
    User.findByIdAndDelete(id, (err, user) => {
        if(err) console.log(err)
        res.redirect(`/users`)
    })
})



router.post(`/`, (req, res) => {
    User.create(req.body, (err, createdUser) => {
        if(err) console.log(err)
        res.redirect(`/users`)
    })
})





module.exports = router