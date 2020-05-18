import React from "react";
import { DeliveryTo } from "./DeliveryTo";
import ProductList from "./ProductList";
import Department from "./Departments"
import './StoreBody.css'

export const StoreBody = () => {
  return (
    <div>
      <DeliveryTo />
      <main>
        <Department />
        <ProductList />
      </main>
    </div>
  );
};
