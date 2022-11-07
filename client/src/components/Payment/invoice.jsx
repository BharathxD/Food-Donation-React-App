import React from "react";

function Invoice() {
  return (
    <a href="https://food-donation-react-app.herokuapp.com/api/payment/get-csv" className="btn btn-lg btn-warning">
      Generate Invoice
    </a>
  );
}

export default Invoice;
