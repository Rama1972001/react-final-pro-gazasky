import React from "react";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";
import HeroImage from "./Navigation/HeroImage";

// import TopBanner from "./Navigation/TopBanner";

import data from "../data/Allproducts.json";
import ProductDetails from "./ProductDetails";
import {
  
  useParams
} from "react-router-dom";

export default function Catalog(props) {
  const {id,action} =useParams();

  let selectedProduct = "";
  // // useParams hook  to extract the id and action parameters from the URL.
  //  If the id parameter is not null, it filters the data array to find the object that has a matching id property, and assigns it to the selectedProduct variable.
 
  if (id != null) {
    selectedProduct = data.filter((product) => product.id === id);
    // .filter() method can be used on arrays to create a new array with elements that pass the test implemented by the provided function. The function takes in an element of the array as a parameter and returns a boolean value indicating whether the element should be included in the new filtered array.
    
    //  used to filter the data array of objects and returns the object that has a matching id property.
  }

  return (
    <div>
     
      <NavBar />
      <HeroImage />
      
      <ProductDetails product={selectedProduct} key={selectedProduct.id} action={action}/>

      <Footer />
    </div>
  );
}
