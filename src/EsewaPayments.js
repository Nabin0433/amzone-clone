import React from "react";
import "./EsewaPayments.css";
function EsewaPayments({ price, pid }) {
  const esewaPay = () => {
    window.location = ('/yoooo?price=ghfgfghf');
  }




    return (
        <div className="esewapaymnts">
            {price}
        <img
          onClick={esewaPay}
          className="esewalogo"
          src="https://www.collegenp.com/uploads/2020/01/eSewa.png"
          alt="esewa"
        />
      </div>
    );
};
export default EsewaPayments;
