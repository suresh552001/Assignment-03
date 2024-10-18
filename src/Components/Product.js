import React from "react";
import Fur from "./Fur";
import { data } from "./data";

 export const Product=()=>{
  return(
    <>
  
    <h1 className="text-center text-danger mt-3">Special Diwali Furniture</h1>
            <section className="py-4 container">
              <div className="row justify-content-center">
              
             {data.productData.map(
                 (item,index)=>{
                  return(
                  <Fur
                  img={item.img} 
                  title={item.title}  
                  price={item.price} 
                  desc={item.desc} 
                  item={item}
                  key={index}/> 
                  )
                 }
             )}
              </div>
              
            </section>
    </>
  )
}
