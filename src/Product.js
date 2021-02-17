import React from "react";
import "./Products.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
function Product({ title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD-TO-BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>NPR.</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon style={{ color: "yellow" }} />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="img" />
      <button onClick={addToBasket}> Add to List</button>
    </div>
  );
}

export default Product;
