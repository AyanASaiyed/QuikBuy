import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export const ShopForm = ({ addItem }) => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item && quantity > 0 && price > 0) {
      addItem(item, quantity, price);
      setItem("");
      setQuantity("");
      setPrice("");
    } else {
      alert("Please enter valid item, quantity, and price.");
    }
  };

  const handleSignOut = async (signOut) => {
    await signOut();
    navigate("/");
  };

  return (
    <div>
      <Authenticator>
        {({ signOut }) => (
          <div>
            <section>
              <Link to="/" className="no-under-line">
                <button type="button" className="homebtn">
                  Home
                </button>
              </Link>
            </section>
            <section>
              <button
                type="button"
                className="logoutbtn"
                onClick={() => handleSignOut(signOut)}
              >
                Log Out
              </button>
            </section>
            <div className="ShopWrapper">
              <form className="ShopForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="shop-input"
                  value={item}
                  placeholder="Enter Item"
                  onChange={(e) => setItem(e.target.value)}
                />
                <input
                  type="number"
                  className="shop-input"
                  min="1"
                  value={quantity}
                  placeholder="Enter Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                  type="number"
                  className="shop-input"
                  step="0.01"
                  min="0.01"
                  value={price}
                  placeholder="Enter Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit" className="shopping-btn">
                  Add Item
                </button>
              </form>
            </div>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

export default ShopForm;
