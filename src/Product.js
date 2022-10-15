import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, universityName, universityLink, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the Data Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        {/* Every Product has 5 components: Product Title, Price, Rating, Image, 'Add to Basket' Button */}
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <form>
          <button className="product__university" type="submit" formAction={universityLink} formTarget="_blank">{universityName}</button>
        </form>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
