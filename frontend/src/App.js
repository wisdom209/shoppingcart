import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import SelectedProduct from "./Screens/SelectedProduct";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import SignInScreen from "./Screens/SignInScreen";
import CreateAccount from "./Screens/CreateAccount";
import CreateProduct from "./Screens/CreateProduct";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import { ResetAction } from "./Redux/Actions.js/ResetAction";
import {
    filterAll,
    filterMenClothing,
    filterWomenClothing,
    filterElectronics,
    filterJewellery
} from "./Redux/Actions.js/FilterActions";

function App(props) {
    const [ sideBarClass, setsideBarClass ] = useState("sideBarGone");

    const isAuthenticated = Cookie.get("token");
    const globalName = useSelector((state) => state.globalName);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const signOut = () => {
        Cookie.set("token", "");
        Cookie.set("globalName", "");
        dispatch(ResetAction());

        if (props.history) {
            props.history.push("/");
        }
    };

    return (
        <BrowserRouter>
            <div className="App">
                <div className="appHeader">
                    <div className="titleBox">
                        <span className="appHamburger">
                            <button onClick={() => setsideBarClass("sideBar")}>
                                <b>&#9776;</b>
                            </button>
                        </span>{" "}
                        <span className="title">
                            <Link to="/">amazona</Link>
                        </span>
                    </div>
                    <div className="cart_signin">
                        <div className="cartLink">
                            <Link to="/cart">Cart</Link>
                        </div>{" "}
                        &nbsp;{" "}
                        <div className="signInLink">
                            {globalName ? (
                                <span>
                                    <button onClick={signOut}>Sign out</button>&nbsp; &nbsp;{" "}
                                    <Link to="#">
                                        <i>Hello {globalName}</i>
                                    </Link>
                                </span>
                            ) : (
                                <Link to="/signin">Sign in</Link>
                            )}
                        </div>
                    </div>
                </div>

                <div className={sideBarClass}>
                    <div className="sideBarTitle">
                        <div>Shopping Category</div>
                        <div>
                            <button onClick={() => setsideBarClass("sideBarGone")}>&times;</button>
                        </div>
                    </div>
                    <div className="sideBarCategory">
                        <Link to="#" onClick={() => dispatch(filterAll(products))}>
                            All categories
                        </Link>
                    </div>
                    <div className="sideBarCategory">
                        <Link to="#" onClick={() => dispatch(filterMenClothing(products))}>
                            Men clothing
                        </Link>
                    </div>
                    <div className="sideBarCategory">
                        <Link to="#" onClick={() => dispatch(filterWomenClothing(products))}>
                            Women clothing
                        </Link>
                    </div>
                    <div className="sideBarCategory">
                        <Link to="#" onClick={() => dispatch(filterElectronics(products))}>
                            Electronics
                        </Link>
                    </div>
                    <div className="sideBarCategory">
                        <Link to="#" onClick={() => dispatch(filterJewellery(products))}>
                            Jewellery
                        </Link>
                    </div>
                </div>
                <div className="appBody">
                    {isAuthenticated ? (
                        <div>
                            <Route path="/placeorder" component={PlaceOrderScreen} />
                            <Route path="/payment" component={PaymentScreen} />
                            <Route path="/shipping" component={ShippingScreen} />
                            <Route path="/createproduct" component={CreateProduct} />
                        </div>
                    ) : (
                        <Redirect to="/signin" />
                    )}

                    <Route path="/createaccount" component={CreateAccount} />
                    <Route path="/signin" component={SignInScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/selectedProduct/:id?" component={SelectedProduct} />
                    <Route path="/" exact={true} component={HomeScreen} />
                </div>

                <div className="appFooter">All Rights Reserved &copy; 2020</div>
            </div>
        </BrowserRouter>
    );
}

export default App;
