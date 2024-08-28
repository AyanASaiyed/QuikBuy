import React, { useState, useEffect } from "react";
import { ShopForm } from "./ShopForm.jsx";
import { v4 as uuidv4 } from "uuid";
import { Shop } from "./Shop.jsx";
import EditShop from "./EditShop.jsx";
import { TaxInput } from "./TaxInput.jsx";

uuidv4();

export const ShopParent = () => {
  const [items, setItems] = useState([]);
  const [taxRate, setTaxRate] = useState(0);

  const addItem = (item, quantity, price) => {
    setItems([
      ...items,
      {
        id: uuidv4(),
        piece: item,
        bought: false,
        isEditing: false,
        amount: quantity,
        tag: price,
      },
    ]);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((piece) => piece.id !== id);
    setItems(updatedItems);
  };

  const editItem = (id) => {
    setItems(
      items.map((piece) =>
        piece.id === id ? { ...piece, isEditing: !piece.isEditing } : piece
      )
    );
  };

  const editPiece = (piece, quantity, price, id) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? { ...item, piece, amount: quantity, tag: price, isEditing: false }
        : item
    );
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    const subtotal = items.reduce(
      (total, item) => total + item.amount * item.tag,
      0
    );
    const totalWithTax = subtotal * (1 + taxRate / 100);
    return totalWithTax.toFixed(2);
  };

  return (
    <div className="ShopWrapper">
      <div className="ShopWrapper2">
        <h1 className="add-items-title">Add Your Items!</h1>
        <ShopForm addItem={addItem} taxRate={taxRate} />
        {items.map((item) =>
          item.isEditing ? (
            <EditShop
              key={item.id}
              editItem={editPiece}
              id={item.id}
              piece={item.piece}
              amount={item.amount}
              tag={item.tag}
            />
          ) : (
            <Shop
              id={item.id}
              piece={item.piece}
              amount={item.amount}
              tag={item.tag}
              key={item.id}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          )
        )}
        <div className="tax-input">
          <h2>
            Tax Rate (%): <TaxInput taxRate={taxRate} setTaxRate={setTaxRate} />
          </h2>
        </div>
        <div className="total-sum">
          <h2>Total (with tax): ${calculateTotal()}</h2>
        </div>
      </div>
    </div>
  );
};

export default ShopParent;
