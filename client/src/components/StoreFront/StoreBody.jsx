import React from "react";
import { DeliveryTo } from "./DeliveryTo";
import ProductList from "./ProductList";
import Departments from "./Departments"
import './StoreBody.css'

export const StoreBody = () => {
 return (
  <div className="storeBodyPage">
   <DeliveryTo />
   <main className="storeBodySection">
    <Departments />
    <ProductList />
   </main>
  </div>
 );
};
