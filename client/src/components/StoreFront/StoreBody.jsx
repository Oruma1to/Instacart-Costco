import React from "react";
import { DeliveryTo } from "./DeliveryTo";
import ProductList from "./ProductList";
import Department from "./Departments"


export const StoreBody = () => {
  return (
    <div>
      <DeliveryTo />
      <ProductList />
      <Department />
    </div>
  );
};
