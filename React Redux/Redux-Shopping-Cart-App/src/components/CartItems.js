import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  // console.log(cartItems, "itemsList");

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {/* <li>
          <CartItem id={1} price={2500} name={"Macbook"} />
        </li> */}
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
