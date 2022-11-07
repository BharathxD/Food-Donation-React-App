const Router = require("express").Router();

const Razorpay = require("razorpay");

const crypto = require("crypto");
const { Parser } = require("json2csv");
const fs = require("fs");

/* Initializing Data Object for exporting the CSV*/

var data = [
  {
    order_id: "razorpay_order_id",
    order_total: "3000",
    payment_method: "razorpay_payment_id",
    payment_status: "success",
  },
];

/* This Route is to make a post request to server so that it can display RazerPay Payment Gateway */

Router.post("/orders", async (req, res) => {
  try {
    /* Creating Instance for Initiating the order */

    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100,
      /* I've multiplied it with 100, so that the actual amount will be displayed in rupees instead od paisa */
      currency: "INR",
      /* Currency has been set as INR */
      receipt: crypto.randomBytes(10).toString("hex"),
      /* Generating a random reciept name for the order */
      /* We cannot generate or authenticate the payment request without passing the reciept */
    };

    /* Calling the order creation function */

    instance.orders.create(options, (error, order) => {
      /* Error handling */
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (e) {
    /* Error handling */
    res.status(500).json({ message: "500, Server Error" });
    console.log(e);
  }
});

/* Route to verify if the payment was successful */

Router.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    /* RazorPay will send the JSON objects with the above mentioned keys */
    /* Those keys can be used by req.body */
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    /* Decrypting the payment signature */
    const expectedSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");
    /* This will check if the signature we recieved from razorpay order matches the signature we created */
    if (razorpay_signature === expectedSign) {
      /* Updating the data inorder to generate the CSV with latest information available */
      data = [
        {
          order_id: razorpay_order_id,
          order_total: "3000",
          payment_method: razorpay_payment_id,
          payment_status: "success",
        },
      ];
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

Router.get("/get-csv", (req, res) => {
  /* Creating an object for Parser */
  jsonCsvParser = new Parser();
  /* Parsing the data of CSV variable */
  const csv = jsonCsvParser.parse(data);
  /* Finally Creating the file using file system */
  fs.writeFile("invoice.csv", csv, (err) => {
    if (err) throw err;
    else {
      console.log("File Successfully saved and stored in the root directory");
    }
  });
  /* Sending the csv file to the client */
  res.attachment("invoice.csv");
  res.status(200).send(csv);
});

module.exports = Router;
