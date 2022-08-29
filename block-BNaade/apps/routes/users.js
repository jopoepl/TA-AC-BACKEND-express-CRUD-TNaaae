var express = require(`express`)
var router = express.Router()
var User = require(`../models/user`)

//routes



router.get(`/new`, (req, res) => {
    res.render(`form`)
})

router.get(`/`, (req, res) => {
    User.find({}, (err, users) => {
        if(err) console.log(err)
        console.log(users)

        res.render(`users`, {users: users})
    })
})


router.get(`/:id`, (req, res) => {
    let id = req.params.id
    User.findById(id, (err, user) => {
        if(err) console.log(err)
        res.render(`singleuser`, {user: user})
    })
})


router.post(`/`, (req, res) => {
    console.log(req.body)
    User.create(req.body, (err, createdUser) => {
        if(err) {
            console.log(err)
            res.redirect(`/users/new`)
        } else {
            console.log(createdUser)
            res.redirect(`/`)
        }
    })

})

router.put(`/:id` ,(req, res, next) => {
    let id = req.params.id
    User.findById(id, (err, user) => {
        if (err) console.log(err)
        res.render(`updateUser`, {user: user})
    })
})

router.post(`/:id` ,(req, res, next) => {
    let id = req.params.id
    User.findByIdAndUpdate(id, req.body, (err, updatedUsers) => {
        console.log(updatedUsers)

        res.redirect(`/users`)
    })
})

router.get(`/:id` + `/edit`, (req, res, next) => {
    let id = req.params.id
    User.findById(id, (err, user) => {
        if (err) console.log(err)
        res.render(`updateUser`, {user: user})
    })
})

module.exports = router;
