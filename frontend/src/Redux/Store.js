import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import SelectedItemsReducer from "./Reducers/SelectedItemsReducer";
import thunk from "redux-thunk";
import CartItemsReducer from "./Reducers/CartItemsReducer";
import QuantityReducer from "./Reducers/QuantityReducer";


const rootReducer = combineReducers({
    selectedProduct : SelectedItemsReducer,
    cartItems : CartItemsReducer,
    selectedQuantity : QuantityReducer
});


const middleware = [ thunk ];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;
