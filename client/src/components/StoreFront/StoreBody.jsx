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
    <div className="storebody-products-list">
     <ProductList />
     <ProductList />
    </div>
   </main>
  </div>
 );
};
