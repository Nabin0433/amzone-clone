import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://th.bing.com/th/id/R33d6879fc50b59a6d20c0859ec5eab58?rik=WgTUsGObhDHbuQ&riu=http%3a%2f%2fmywifequitherjob.com%2fblog%2fwp-content%2fuploads%2f2013%2f08%2fAmazonProductAdsBanner.jpg&ehk=4Tp0OuYX8lKZLSRRF54n4nh%2bODtZYe7%2bywB8R7U3Qqo%3d&risl=&pid=ImgRaw"
          alt="banner"
        />
        <div>
          <h3>Hello , { user?.email}</h3>
          <h2 className="checkout-title"> Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
