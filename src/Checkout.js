import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
// import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <a href="https://custom.uscbookstore.com/?_ga=2.202582673.1003704801.1665436503-1860534452.1665436503" target="_blank">
          <img
            className="checkout__ad"
            src="https://www.uscbookstore.com/SSP%20Applications/USC%20-%20SCA%20Vinson/USC%20Development/img/CustomShop_small%20feature_090722%20(1).jpg"
            alt=""
          />
        </a>
        <div>
          <h3>Hello, {!user ? "Student" : user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* BasketItems List goes down here. */}
          {/* Checkout Product */}
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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
