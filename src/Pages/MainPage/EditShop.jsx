import React, { useState } from "react";
import "@aws-amplify/ui-react/styles.css";

export const EditShop = ({ editItem, id, piece, amount, tag }) => {
  const [item, setItem] = useState(piece);
  const [quantity, setQuantity] = useState(amount);
  const [price, setPrice] = useState(tag);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item && quantity > 0 && price > 0) {
      editItem(item, quantity, price, id);
      console.log("Submitted item:", item, quantity, price, id);
    } else {
      alert("Please enter valid item, quantity, and price.");
    }
  };

  return (
    <div className="ShopWrapper">
      <form className="ShopForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="shop-input"
          value={item}
          placeholder="New Item"
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="number"
          className="shop-input"
          min="1"
          value={quantity}
          placeholder="New Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          className="shop-input"
          step="0.01"
          min="0.01"
          value={price}
          placeholder="New Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className="shopping-btn">
          Change Item
        </button>
      </form>
    </div>
  );
};

export default EditShop;
