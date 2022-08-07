import React, { useState } from "react";
import CartItems from "./CartItems";
import { useStateValue } from "./Context/StateProvider";

const CartDetails = () => {
  const [cart, setCart] = useState([]);
  const [state] = useStateValue();
  const filterData = state.filter((item) => {
    return item.qty > 0;
  });
  setCart(filterData);

  return (
    <div>
      <div>Cart Details</div>
      {cart.map((item) => {
        item.qty > 0 && (
          <div>
            <CartItems item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CartDetails;
