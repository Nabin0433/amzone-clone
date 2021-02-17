import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="orderId">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => {
        return (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
          />
        );
      })}
      <div className="order-total">
        <CurrencyFormat
          renderText={(value) => <h3>Order Total : {value}</h3>}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"NPR."}
        />
      </div>
    </div>
  );
}

export default Order;
