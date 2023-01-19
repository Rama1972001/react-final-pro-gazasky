import React, { Suspense, lazy } from "react";

import loadingIcon from "../assets/images/dashboardloader3.gif";
const NavBar = lazy(() => import("./Navigation/NavBar"));
const Footer = lazy(() => import("./Navigation/Footer"));
const HeroImage = lazy(() => import("./Navigation/HeroImage"));
const Products = lazy(() => import("./Products"));

export default function Shopping(props) {
  const collectionname = props.match.params.collectionname;
//  using the "match" object from the React Router library  access the "params" object. The "params" object is used to access the dynamic parts of the URL path, which are specified by a colon (:) in the route path. In this case, it appears that the component is accessing a dynamic parameter named "collectionname" from the URL path and passing it as a prop to the Products component.

 


  return (
    <div>
      <Suspense
        fallback={
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
      >
        {/* <TopBanner /> */}
        <NavBar />

        <HeroImage />

        <Products collectionname={collectionname} />
        {/* collectionname prop  pass down to the Products component which is probably used to load a specific set of products based on the collection name. */}

        <Footer />
      </Suspense>
    </div>
  );
}
