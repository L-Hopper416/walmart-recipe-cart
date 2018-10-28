const router = require("express").Router();
const Nightmare = require('nightmare');
const vo = require('vo')

const URL = 'https://grocery.walmart.com/';


// Matches with "/api/walmart/cartLoad"
router.post('/cartLoad', (req, res) => {
    vo(run(req.body))(function () {
        console.log("Cart Loaded!")
      });
})
function* emptyCart(auth){
    const nightmare = Nightmare({
        show: true
    });
}
function* run(items){
    const nightmare = Nightmare({
        show: true
    });
    for (let i = 0; i < items.length; i++) {
        console.log(items[i].url)
        yield nightmare
            .goto(items[i].url)
            .wait('.addToCartTile__buttonAddToCart___2m2Zq')
            .click('.addToCartTile__buttonAddToCart___2m2Zq')
        if (items[i].quantity > 1) {
            yield nightmare
            .wait('.addToCartTile__input___1qjzH')
            .type('.addToCartTile__input___1qjzH',"\u0008")
            .type('.addToCartTile__input___1qjzH',items[i].quantity)
            .wait('.addToCartTile__buttonUpdate___V-Ob0')
            .click('.addToCartTile__buttonUpdate___V-Ob0')
            .wait(5000)
            }
        
    }
    yield nightmare
        .end()
        .catch((error) => {
            console.error('an error has occurred: ' + error);
            res.send(error)
        })
        .then(() => (console.log('process exit'), res.send("process exit")));
}
module.exports = router;