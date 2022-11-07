import React from "react";

function Invoice() {
  return (
    <a href="http://localhost:3001/api/payment/get-csv" className="btn btn-lg btn-warning">
      Generate Invoice
    </a>
  );
}

export default Invoice;
