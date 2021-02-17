import React, { useState, useEffect } from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import KhaltiPayments from "./KhaltiPayments";
import EsewaPayments from "./EsewaPayments";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispath] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeded, setSucceded] = useState();
  const [processing, setProcessing] = useState();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSceret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSceret();
  }, [basket]);
  const handleSubmit = async (event) => {
    // strips logic
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //  paymentIntent =payment conformation
        db.collection("orderByStripe")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceded(true);
        setError(null);
        setProcessing(false);
        dispath({
          type: "REMOVE_BASKET",
        });
        history.replace("/orders");
      });
  };
  ////////////////////////////////////////
  const handleChange = (event) => {
    // change handeller
    setDisabled(event.empty);
    setError(event.error ? event.error.massage : " ");
  };
  return (
    <div className="payment">
      <h1>
        {" "}
        Checkout ( <Link to="/checkout"> {basket.length} items </Link>)
      </h1>
      <div className="payment-container">
        {/* payment section  */}
        <div className="payment-section">
          <div className="payment-title">
            <h3> Delevery Address </h3>
          </div>
          <div className="payment.address">
            <p>{user?.email}</p>
            <p>kkkkk</p>
            <p>llllll</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Reviw items and delevery</h3>
          </div>
          <div className="payment-items">
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
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            {user? (
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"NPR."}
                />
                <button disabled={processing || disabled || succeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* eRRORS */}
              <div className="paymentsDiv">
                <KhaltiPayments price={getBasketTotal(basket)} pid="" />
                <EsewaPayments price={getBasketTotal(basket)} pid="" />
              </div>
              {error && <div>{error}</div>}
            </form>
            ):(<h1>You Need To Sing In to Buy Products</h1>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
