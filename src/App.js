import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartDetails from "./Components/CartDetails";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Payment from "./Components/Payment";
import ProductList from "./Components/ProductList";
import Summary from "./Components/Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
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
