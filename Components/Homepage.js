import React, { Suspense } from "react";
import "../styles/Homepage.scss";



import "bootstrap/dist/css/bootstrap.min.css";
import loadingIcon from "../assets/images/dashboardloader3.gif";

const NavBar = React.lazy(() => import("./Navigation/NavBar"));
const Footer = React.lazy(() => import("./Navigation/Footer"));
const ProductCategories = React.lazy(() => import("./ProductCategories"));
const HeroText = React.lazy(() => import("./Navigation/HeroText"));

export default function () {
  return (
    <div>



{/* he Suspense component is used to handle the loading state of a component that is being rendered asynchronously.
The "fallback" prop is used to specify what should be rendered while the component is loading */}
      <Suspense
        fallback={
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
      >
        
        <NavBar />

        <HeroText />

      

        <ProductCategories />

      

        <Footer />
      </Suspense>
    </div>
  );
}
