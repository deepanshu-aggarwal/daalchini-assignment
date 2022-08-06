import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useStateValue } from "./Context/StateProvider";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  main: {
    position: "fixed",
    bottom: 0,
    height: "100px",
    backgroundColor: "#1CAC78",
    width: "100vw",
  },
  continue: {
    color: "white",
    cursor: "pointer",
    // fontWeight: "semibold",
  },
}));

const Summary = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const [isLogin] = useStateValue();

  // useEffect(() => {
  //   setCart(
  //     state.filter((item) => {
  //       console.log("called", count++);
  //       return item.qty > 0;
  //     })
  //   );
  // });
  // const { data } = JSON.parse(localStorage.getItem("data"));
  // const newData = data.filter((item) => {
  //   return item.qty > 0;
  // });
  // setCart(newData);
  // const dataprice = cart.forEach((item) => {
  //   setTotal((total) => total + item.price);
  // });

  const proceedCheckout = () => {
    if (isLogin !== "") {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={classes.main}>
      <div>
        <div>{cart.length}</div>
        {/* <div>Total Rs. {total}</div> */}
      </div>
      <div className={classes.continue} onClick={() => proceedCheckout()}>
        Continue
      </div>
    </div>
  );
};

export default Summary;
