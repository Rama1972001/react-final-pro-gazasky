export default (state, action)=>{
   
    switch(action.type){

        // Redux reducer function. It takes in two arguments: the current state and an action. The function uses a switch statement to determine which action has been dispatched and updates the state accordingly. The cases "SAVE_ITEM_FOR_LATER", "ADD_ITEM_TO_CART", "REMOVE_ITEM_FROM_CART", "REMOVE_FROM_SAVED_FOR_LATER" all update the state by creating a new copy of the state object and modifying the cartSavedForLater or myShoppingCart property. The default case returns the current state unchanged.
        
        case "SAVE_ITEM_FOR_LATER":
            // "SAVE_ITEM_FOR_LATER" case: When this action is dispatched, the reducer function creates a new copy of the state object using the spread operator (...state), and then modifies the cartSavedForLater property by adding the payload (which is the item to be saved for later) to the beginning of the array using the spread operator (...state.cartSavedForLater). This ensures that the item is added to the beginning of the array, while preserving the current state of the rest of the object.
            return{
                ...state,
                cartSavedForLater:[action.payload, ...state.cartSavedForLater],
            };
        case "ADD_ITEM_TO_CART":
            return{
                ...state,
                myShoppingCart:[action.payload, ...state.myShoppingCart],
            };
            case "REMOVE_ITEM_FROM_CART":
                return{
                    ...state,
                    myShoppingCart: state.myShoppingCart.filter(
                        (myShoppingCart) => myShoppingCart.cartItemId !== action.payload
                    )

                };
                case "REMOVE_FROM_SAVED_FOR_LATER":
                    return{
                        ...state,
                        cartSavedForLater: state.cartSavedForLater.filter(
                            (cartSavedForLater) => cartSavedForLater.cartItemId !== action.payload
                        )
                        
                    };
        default:
            return state;
    }
};


//  Redux reducer function  to  React Hooks 

// import { useState } from 'react';

// export default function useShoppingCart() {
//     const [state, setState] = useState({
//         myShoppingCart: [],
//         cartSavedForLater: []
//     });

//     function saveItemForLater(payload) {
//         setState(prevState => ({
//             ...prevState,
//             cartSavedForLater: [payload, ...prevState.cartSavedForLater],
//         }));
//     }

//     function addItemToCart(payload) {
//         setState(prevState => ({
//             ...prevState,
//             myShoppingCart: [payload, ...prevState.myShoppingCart],
//         }));
//     }

//     function removeItemFromCart(payload) {
//         setState(prevState => ({
//             ...prevState,
//             myShoppingCart: prevState.myShoppingCart.filter(
//                 (myShoppingCart) => myShoppingCart.cartItemId !== payload
//             )
//         }));
//     }

//     function removeFromSavedForLater(payload) {
//         setState(prevState => ({
//             ...prevState,
//             cartSavedForLater: prevState.cartSavedForLater.filter(
//                 (cartSavedForLater) => cartSavedForLater.cartItemId !== payload
//             )
//         }));
//     }

//     return {
//         state,
//         saveItemForLater,
//         addItemToCart,
//         removeItemFromCart,
//         removeFromSavedForLater
//     }
// }
// // use the useState hook to initialize the state object, and it has four functions saveItemForLater, addItemToCart, removeItemFromCart, removeFromSavedForLater, that manage the state by calling the setState function with an updated version of the state object. 

// //  difference between this Hooks function and the  reducer function is that this Hooks function doesn't take any action as an argument, instead it has four methods that are equivalent to the cases in the original reducer function.


