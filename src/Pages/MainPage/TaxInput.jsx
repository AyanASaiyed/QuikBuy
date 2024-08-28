import React from "react";

export const TaxInput = ({ taxRate, setTaxRate }) => {
  return (
    <div>
      <input
        className="tax-rate"
        type="number"
        min="0"
        step="0.01"
        placeholder="Enter Tax Rate %"
        value={taxRate}
        onChange={(e) => setTaxRate(parseFloat(e.target.value))}
      />
    </div>
  );
};
