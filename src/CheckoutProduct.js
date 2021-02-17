import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove iterm like magic 
        dispatch({
            type: 'REMOVE-FROM-BASKET',
            id: id,
        })

    };
 

  return (
    <div className="checkoutproduct">
      <img className="chectoutproduct-img" alt='product to basked added' src={image} />
      <div className="chectoutproduct-info">
              <p className="chectoutproduct-title">{ title }</p>
        <p className="chectoutproduct-price">
          <small>RS.</small>
          <strong>{price}</strong>
        </p>
        <div className="chectoutproduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><StarIcon style={{color: 'yellow'}} /></p>
            ))}
              </div>
              <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
