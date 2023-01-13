import React, { Suspense, lazy } from "react";

import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalCartContextProvider } from "./context/CartContext";
import { ToastProvider } from "react-toast-notifications";
import loadingIcon from "./assets/images/dashboardloader3.gif";


/*
The Suspense component is used to handle the loading state . It allows you to render a fallback component  while the component is being loaded.

The lazy function is used to load components dynamically, i.e. only when they are actually needed. This can help to improve the performance  by only loading the code that is actually being used, rather than loading all of the code at once.


The GlobalCartContextProvider component  provides a global context for the "cart" 
Context in React allows to pass data through the component tree without having to pass props down manually at every level. By wrapping  my app in a context provider, i can make the context's value available to all components in the tree, without having to pass it down explicitly.




ToastProvider is a component   used to provide a global context for displaying "toast" notifications in a React application.it is a small message that appears on the screen for a short period of time. They are used to give feedback to the user about the result of an action (e.g. "Item added to cart"). The ToastProvider component is used to make the toast function available to all components in the application


*/

const Homepage = lazy(() => import("./Components/Homepage"));
const Shopping = lazy(() => import("./Components/Shopping"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
const Catalog = lazy(() => import("./Components/Catalog"));
const SearchProducts = lazy(() => import("./Components/SearchProducts"));
/************************************************************************************************* */

function App() {
  return (
    <GlobalCartContextProvider>
      <ToastProvider>

        {/*  define a set of routes for a React application.
       The Switch component is used to group together a set of Route components. 
       Each Route component defines a specific path that the application should match with the  URL. When the URL  matches the path defined in a Route, the component is rendered.*/}

        <Router>
          <Suspense
            fallback={
              <img src={loadingIcon} alt="loading" className="loadingIcon" />
            }
          >
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/shop" component={Shopping} />
              <Route exact path="/search" component={SearchProducts} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/trend/:collectionname" component={Shopping} />
              <Route exact path="/collections" component={Shopping} />
              <Route
                exact
                path="/collections/:collectionname"
                component={Shopping}
              />
              <Route
                exact
                path="/catalog/item/:id/:productname/:action"
                component={Catalog}
              />

              <Route />
            </Switch>
          </Suspense>
        </Router>
      </ToastProvider>
    </GlobalCartContextProvider>
  );
}

export default App;
