const express = require("express");
const app = express();

/* ------------------------------*/

const cors = require("cors");
require("dotenv").config();

/* DotENV Dependency */

const port = process.env.PORT;

/* Importing the payment Route */

const paymentRoute = require("./routes/payment");

app.use(express.json());

/* For Cross-Origin Resource Sharing */

app.use(cors());

/* Using the route */

app.use("/api/payment", paymentRoute);

/* The port is 3001 */

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
