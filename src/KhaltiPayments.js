import React from "react";
import checkout from "./Khalti";
import "./KhaltiPayments.css";
function KhaltiPayments({ price, pid }) {
  const khaltiPay = () => {
    ///khali payments logic here ////
    checkout.show({ amount: 10000 });
  };

  return (
    <div className="khaltipayments">
      {price}
      <img
        onClick={price !== "RS.0" ? khaltiPay : ""}
        src="https://sikable.com/static/media/khalti_small.cf1753f7.png"
        alt="khalti"
      />
    </div>
  );
}

export default KhaltiPayments;
