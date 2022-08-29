var express = require(`express`)
var router = express.Router()


router.get(`/`, (req, res) => {
    console.log(req.url)

    res.render(`index`)
})


module.exports = router;