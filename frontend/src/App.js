import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SelectedProduct from "./Screens/SelectedProduct";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import SignInScreen from "./Screens/SignInScreen";
import CreateAccount from "./Screens/CreateAccount";
import CreateProduct from "./Screens/CreateProduct";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import UpdateGlobalName from "./Redux/Actions.js/UpdateGlobalName";

function App(props) {
    const [ sideBarClass, setsideBarClass ] = useState("sideBarGone");
    

    const globalName = useSelector((state) => state.globalName);
    const dispatch = useDispatch();

    const signOut = () => {
        Cookie.set("token", "");
        Cookie.set("globalName", "")
        dispatch(UpdateGlobalName(""));
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
                                    <Link to="#">{globalName}</Link> &nbsp; &nbsp; <button onClick={signOut}>Sign out</button>
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
                    <div className="sideBarCategory">Shirts</div>
                    <div className="sideBarCategory">Trousers</div>
                </div>
                <div className="appBody">
                    <Route path="/placeorder" component={PlaceOrderScreen} />
                    <Route path="/payment" component={PaymentScreen} />
                    <Route path="/shipping" component={ShippingScreen} />
                    <Route path="/createproduct" component={CreateProduct} />
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
