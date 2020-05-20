import React from "react";
import { DeliveryTo } from "./DeliveryTo";
import ProductList from "./ProductList";
import Departments from "./Departments"
import './StoreBody.css'

export const StoreBody = (props) => {
 console.log("In storeBody", props.user)
 return (
  <div className="storeBodyPage">
   <DeliveryTo />
   <main className="storeBodySection">
    <Departments />
    <div className="storebody-products-list">
     <ProductList user={props.user} />
     <ProductList user={props.user} />
    </div>
   </main>
  </div>
 );
};
