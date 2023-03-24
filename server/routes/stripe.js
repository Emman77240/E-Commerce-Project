const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

const Stripe = require('stripe');
const stripe = Stripe("sk_test_51Mob33CvaMGXwHNCsOSAv4pIGGexbLV8uCi1G9Y7kVjXLLCi1oEYpiOiFTx3UGG9jckMJ0VdfZTDZQVNgPl90FkY00T5jcnpzQ");

router.post("/payment", (req, res) => {

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "gbp",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;