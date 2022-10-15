const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Lqf8cL9komtFXP5MGY84C2u62gGzKx0YcEO3KcyCoyGl0HrlqcZnvJsxbtm7M1sFIdRhF3SCKSJd9vFxVYZ5vbv00RHYMyiVS"
);

// API

// <<<< App Config >>>>
const app = express();

// <<<< Middlewares >>>>
app.use(cors({ origin: true }));
app.use(express.json());

// <<<< API Routes >>>>

// GET Requests --> Endpoint = ('Hello')
app.get("/", (request, response) => response.status(200).send("Hello"));

// app.get("/pp", (request, response) => response.status(200).send("Hello PP"));

// POST Requests
app.post("/payments/create", async (request, response) => {
  // requesting --> total query from payments.js
  const total = request.query.total;
  console.log("Payment Request Recieved, Total is >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // total is in subunits of currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  <<<< Listen command >>>>
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/scholar-store/us-central1/api
