import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { makeStyles } from "@material-ui/core";
import Table from "./Table";

const useStyles = makeStyles(() => ({
  main: {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "1.5rem",
    zIndex: "1",
  },
  header: {},
  lower: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#1CAC78",
    height: "10vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.4rem",
  },
  para: {
    marginRight: "1rem",
  },
}));

const Checkout = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <AiOutlineArrowLeft /> Checkout
      </div>
      <Table />
      <div className={classes.lower}>
        <p className={classes.para}>Select Payment</p> <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Checkout;
