import React from "react";
import { useStateValue } from "./Context/StateProvider";
import Login from "./Login";
import Product from "./Product";
import Summary from "./Summary";

const ProductList = () => {
  const [state] = useStateValue();
  return (
    <>
      <div
        style={{
          margin: "0px 10vw",
        }}
      >
        {state.map((item, key) => (
          <div className="line">
            <Product key={item.id} data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
