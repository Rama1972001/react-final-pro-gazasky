import React, { createContext, useReducer, useEffect } from "react";
import CartReducer from '../reducers/CartReducer';


// creating a context for a shopping cart. It is using the createContext function  to create a context object, and then a Provider component that wraps the children components in the application. The Provider component is using the useReducer hook to manage the state of the cart and the useEffect hook to save the cart items to the local storage. It also has several functions that dispatch actions to the reducer to update the cart state, such as addItemTocart, removeItemFromCart, saveItemforLater, and removeItemFromSavedForLater. 

//These functions are passed as values to the context object, so that they can be used by other components in the application.


const initialState = {
  myShoppingCart: JSON.parse(localStorage.getItem("myShoppingCart"))||[],
  cartSavedForLater: JSON.parse(localStorage.getItem("cartSavedForLater"))||[]


};



export const GlobalCartContext=createContext(initialState);

export const GlobalCartContextProvider=({children})=>{
    const [state, dispatch]=useReducer(CartReducer,initialState)
    useEffect(()=>{

      // store the current state of the "myShoppingCart" in the local storage of the user's browser. The localStorage.setItem() method is used to add a key-value pair to the local storage, where the key is "myShoppingCart" and the value is the current state of the cart, which is being passed as a string using the JSON.stringify() method. This way, the cart state can be retrieved and used even after the user refreshes the page or closes the browser.
      localStorage.setItem("myShoppingCart", JSON.stringify(state.myShoppingCart));
      localStorage.setItem("cartSavedForLater", JSON.stringify(state.cartSavedForLater))
    });
    /*************************************************************************************** */

    //update the state of the shopping cart by dispatching actions to the CartReducer.

    const saveItemforLater=(savedItem)=>{
      // it takes an argument savedItem which is an item from the current shopping cart that the user wants to save for later.
      dispatch({
        type: "SAVE_ITEM_FOR_LATER",
        payload: savedItem,
      });
      //  dispatch function to dispatch an action object with a type of "SAVE_ITEM_FOR_LATER" and a payload of "savedItem". --- go to run reducer code ---
    };
    const removeItemFromSavedForLater=(id)=>{
      dispatch({
        type: "REMOVE_FROM_SAVED_FOR_LATER",
        payload: id,
      });
    };
    const addItemTocart=(cartItem)=>{
      dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: cartItem,
      }

      );
    };

    const removeItemFromCart=(cartItemId)=>{
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: cartItemId,

      })
    }
    return(
        <GlobalCartContext.Provider value={{
          myShoppingCart: state.myShoppingCart,
            cartSavedForLater:state.cartSavedForLater,
            addItemTocart,
            removeItemFromCart,
            saveItemforLater,
            removeItemFromSavedForLater
        }}>
        {children}
        </GlobalCartContext.Provider>
    );
}
