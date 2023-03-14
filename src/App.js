import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import CartValue from "./components/CartValue";
import ExpenseList from "./components/ExpenseList";
import ItemSelected from "./components/ItemSelected";
import Location from "./components/Location";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <CartValue />
          </div>
          <div className="col-sm">
            <Location />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Shopping Cart</h2>
            <ExpenseList />
          </div>
        </div>
        {/* <ExpenseItem /> */}
        <div className="row">
          <div className="col">
            <h2>Change allocation</h2>
            <ItemSelected />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
