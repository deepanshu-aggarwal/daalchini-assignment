import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useStateValue } from "./Context/StateProvider";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

const useStyles = makeStyles(() => ({
  main: {
    position: "fixed",
    bottom: 0,
    height: "100px",
    backgroundColor: "#1CAC78",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  continue: {
    color: "white",
    cursor: "pointer",
  },
  container: {
    backgroundColor: "#008000",
    border: "none",
    padding: "5px 10px",
    borderRadius: "15px",
    width: "fit-content",
    height: "fit-content",
    marginRight: "50px",
    color: "#fff",
  },
}));

const Summary = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [state, isLogin] = useStateValue();

  useEffect(() => {
    const newCart = state.filter((item) => {
      return item.qty > 0;
    });
    setCart(newCart);
    let newPrice = 0;
    newCart.forEach((item) => {
      newPrice += item.price * item.qty;
    });
    setPrice(newPrice);
  }, [state]);

  const proceedCheckout = () => {
    if (isLogin !== "") {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <ProductList />
      <div className={classes.main}>
        <div className={classes.container}>
          <div>{cart.length} item(s)</div>
          <div>
            {/* {
              !open ? <div></div>
              
            } */}
          </div>
          <div>Total Rs. {price}</div>
        </div>
        <div className={classes.continue} onClick={() => proceedCheckout()}>
          Continue
        </div>
      </div>
    </>
  );
};

export default Summary;
