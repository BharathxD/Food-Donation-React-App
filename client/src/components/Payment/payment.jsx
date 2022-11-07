import React from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import InvoiceBtn from "./invoice";

import "react-toastify/dist/ReactToastify.css";

function Payment() {

  /* Function for toast */

  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));

  /* Initializing the payment for payment handler */

  const initPayment = (data) => {

    const options = {
      key: process.env.REACT_APP_KEY_SECRET,
      amount: 3000,
      currency: "INR",
      name: "Donation Committee",
      description: "Test Transaction",
      image: "https://www.remakers.fun/wp-content/uploads/2022/01/Donate.png",
      order_id: data.data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:3001/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          toast.promise(resolveAfter3Sec, {
            pending: "Verifying the Payment",
            success: "Payment Successful!!",
            error: "Payment Unsuccessful 🤯",
          });
        } catch (error) {
          console.log(error);
          toast.promise(resolveAfter3Sec, {
            pending: "Verifying the Payment",
            error: "Payment Unsuccessful 🤯",
          });
        }
      },
      /* Theme of the RazorPay Payment gateway UI */
      theme: {
        color: "#FFA500",
      },
    };
    const Razorpay = new window.Razorpay(options);
    Razorpay.open();
  };

  /* This function sends the post request to the server. Server then authenticates and verifys the payment based on handler function in  initPayment() */

  const paymentHandler = async () => {
    try {
      const URI = "http://localhost:3001/api/payment/orders";
      const data = await axios.post(URI, { amount: 3000 });
      initPayment(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (

    <div>

      {/* Triggering paymentHandler when client clicks the submit button */}

      <button className="btn btn-lg btn-danger" onClick={paymentHandler}>
        Donate
      </button>

      &emsp;

      {/* Importing InvoiceBtn */}

      <InvoiceBtn />

      {/* ToastContainer to display toast */}

      <ToastContainer
        position="bottom-center"
        autoClose={7500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </div>

  );
}

export default Payment;
