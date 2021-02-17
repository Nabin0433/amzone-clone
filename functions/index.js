const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const stripe = require("stripe")(
  "sk_test_51IFik9JbjU63l4FUlkK71HrwnoabfDZPLcgHdCbTuKXY4ecFRFUCkNau4ED0UmPodTDyh38YTcPADgoFY0Mgop1Y00w2JI2JTp"
);

//  API




// APP CONFIG
const app = express();
//  MIDDLEWARES // sequrity 
app.use(cors({ origin: true }));

app.use(express.json());

//  API ROUT
app.get("/", (req, res) => res.status(200).send("hello me"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment res ress", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //sub unit
    currency: "NPR",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//  LISTEN COMMAND
exports.api = functions.https.onRequest(app);

//  endpoint
