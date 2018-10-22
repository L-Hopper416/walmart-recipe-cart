const router = require("express").Router();
const Nightmare = require('nightmare');
const nightmare = Nightmare({
    show: true
});

const URL = 'https://grocery.walmart.com/';
// Matches with "/api/walmart/cartLoad"
router.get('/cartLoad', (req, res) => {
    const nightmare = Nightmare({
        show: true
    });
    console.log(req.body)
    nightmare
        .goto(URL)
        .wait(20000)
        .end()
        .catch((error) => {
            console.error('an error has occurred: ' + error);
            res.send(error)
        })
        .then(() => (console.log('process exit'), res.send("process exit")));
})


module.exports = router;