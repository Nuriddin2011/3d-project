import React, { useState } from "react";
import { getData } from "./constants/db";
import Card from "./components/card/card";
import "./App.css";
import Shop from "./components/shop/shop";

const car = getData();

const App = () => {
  const [cardItems, setCartItems] = useState([]);

  const onAddItem = (item) => {
    const existItem = cardItems.find((c) => c.id === item.id);
    if (existItem) {
      const newData = cardItems.map((c) =>
        c.id == item.id ? { ...existItem, quantity: existItem.quantity + 1 } : c
      );
      setCartItems;
    } else {
      const newData = [...cardItems, { ...item, quantity: 1 }];
      setCartItems(newData);
    }
  };

  const onRemoveItem = (item) => {
    const existItem = cardItems.find((c) => c.id === item.id);

    if (existItem.quantity == 1) {
      const newData = cardItems.filter((c) => c.id !== existItem.id);
      setCartItems;
    } else {
      const newData = cardItems.map((c) =>
        c.id == item.id ? { ...existItem, quantity: existItem.quantity - 1 } : c
      );
      setCartItems;
    }
  };

  return (
    <div className="container">
      <h1 className="heading">GM Auto</h1>
      <Shop />
      <div className="app-card">
        {car.map((car) => (
          <Card car={car} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
        ))}
      </div>
    </div>
  );
};

export default App;
