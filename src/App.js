import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartDetails from "./Components/CartDetails";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import Summary from "./Components/Summary";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
