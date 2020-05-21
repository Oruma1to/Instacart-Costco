import React from "react";
import { DeliveryTo } from "./DeliveryTo";
import ProductList from "./ProductList";
import Departments from "./Departments"
import './StoreBody.css'

export const StoreBody = (props) => {
 console.log("In storeBody", props.user)
 console.log("IN STOREBODY", props.searchProducts)
 return (
  <div className="storeBodyPage">
   <DeliveryTo />
   <main className="storeBodySection">
    <Departments />
    <div className="storebody-products-list">
     <ProductList user={props.user} dataInfo={1} title="Buy Again" />
     <ProductList user={props.user} dataInfo={2} title="New Arrivals" />
    </div>
   </main>
  </div>
 );
};
