import React from "react";
import '../styles/ProductCategories.scss';
import Women from '../assets/images/im.jpg';
import Men from '../assets/images/selective-focus-photo-of-man-wearing-black-turtleneck-top-837140.jpg';
import Kids from '../assets/images/kk.jpg';

export default function ProductCategories() {
  return (
    <div className="products-category-container">
    
       <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-6 ">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top " 
       src={Men}
       
       alt="Products" />
        <div className="card-body">
          <h3 className="card-title">
           Men
          </h3>
         
        </div>
        <div className="card-country-info">
          <a
            href="/collections/men"
            className="stretched-link"
          > </a>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top" 
        src={Women}
       
       alt="Products" />
        <div className="card-body ">
        <h3 className="card-title ">
          Women
          </h3>
          <a
            href="/collections/women"
            className="stretched-link"
          > </a>
        </div>
       
      </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-6  ">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top" 
      src={Kids}
       
       alt="Products" />
     
        <div className="card-body">
        <h3 className="card-title">
        Kids
          </h3>
          
          <a
            href="/collections/kids"
            className="stretched-link"
          > </a>
        </div>
       
      </div>
    </div>


      </div>
    
  
         </div>
  );
}
