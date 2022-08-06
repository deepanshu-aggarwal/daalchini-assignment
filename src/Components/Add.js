import React, { useEffect, useState } from "react";
import { useStateValue } from "./Context/StateProvider";

const Add = ({ open, classes, setOpen, item }) => {
  const [qty, setQty] = useState(item.qty);
  const data = JSON.parse(localStorage.getItem("data"));
  const [state, setState] = useStateValue();
  useEffect(() => {
    item.qty = qty;
    const newData = data.map((curr) => {
      if (curr.id === item.id) {
        curr.qty = qty;
      }
      return curr;
    });
    setState(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }, [qty]);

  return (
    <div>
      {qty > 0 ? (
        <div className={classes.qty}>
          <div style={{ cursor: "pointer" }} onClick={() => setQty(qty - 1)}>
            -
          </div>
          <div style={{ cursor: "default" }}>{qty}</div>
          <div style={{ cursor: "pointer" }} onClick={() => setQty(qty + 1)}>
            +
          </div>
        </div>
      ) : (
        <div className={classes.add} onClick={() => setQty(qty + 1)}>
          ADD
        </div>
      )}
    </div>
  );
};

export default Add;
