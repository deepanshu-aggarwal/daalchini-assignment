import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import { useStateValue } from "./Context/StateProvider";

const CartDetails = () => {
  const [cart, setCart] = useState([]);
  const [state, setState] = useStateValue();
  // const data = [...state];
  // useEffect(() => {
  //   const filterData = data.filter((item) => {
  //     return item.qty > 0;
  //   });
  //   setCart(filterData);
  // setState(filterData);
  // console.log(state);
  // }, []);
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
