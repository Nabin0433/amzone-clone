import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispath] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal-gift">
              Subtotal ({basket.length} items) : <strong>{ value }</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order containt a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={ getBasketTotal(basket) }
        displayType={"text"}
        thousandSeparator={true}
        prefix={"RS."}
      />
      <button onClick={e => history.push('/payment')}>Proceed To Checkout </button>
    </div>
  );
}

export default Subtotal;
