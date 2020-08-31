import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import SelectedItemsReducer from "./Reducers/SelectedItemsReducer";
import thunk from "redux-thunk";
import CartItemsReducer from "./Reducers/CartItemsReducer";
import QuantityReducer from "./Reducers/QuantityReducer";
import AllProductsReducer from "./Reducers/AllProductsReducer";
import GlobalNameReducer from "./Reducers/GlobalNameReducer";
import ShippingDetailsReducer from "./Reducers/ShippingDetailsReducer";
import OrderDetailsReducer from "./Reducers/OrderDetailsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
    key     : "root",
    storage : storageSession
};

const rootReducer = combineReducers({
    selectedProduct  : SelectedItemsReducer,
    cartItems        : CartItemsReducer,
    selectedQuantity : QuantityReducer,
    products         : AllProductsReducer,
    globalName       : GlobalNameReducer,
    shippingDetails  : ShippingDetailsReducer,
    orderDetails     : OrderDetailsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [ thunk ];

// const store = createStore(
//     persistReducer,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

export let store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export let persistor = persistStore(store);
