import React from "react";
import { useSelector } from "react-redux";
import StepComponent from "../Components/StepComponent";

function PlaceOrderScreen() {
    const step1 = { borderTop: "0.5rem solid #ffa500" };
    const step2 = { borderTop: "0.5rem solid #ffa500" };
    const step3 = { borderTop: "0.5rem solid #ffa500" };
    const step4 = { borderTop: "0.5rem solid #ffa500" };

    const shippingDetails = useSelector((state) => state.shippingDetails);
    const orderDetails = useSelector((state) => state.orderDetails);
    const cartItems = useSelector((state) => state.cartItems);
    const selectedQuantity = useSelector((state) => state.selectedQuantity);

    return (
        <div className="placeOrderBox">
            <StepComponent step1={step1} step2={step2} step3={step3} step4={step4} />
            <div className="cartBox">
                <div className="cartDetails">
                    <div style={{ marginLeft: "1rem" }}>
                        <b>Shipping</b>
                    </div>
                    <div style={{ marginLeft: "1rem" }}>{shippingDetails.address} {shippingDetails.city}, {shippingDetails.country}</div>
                    <div style={{ marginLeft: "1rem" }}>
                        <b>Payment</b>
                    </div>
                    <div style={{ marginLeft: "1rem" }}>Payment method : {shippingDetails.paymentMethod}</div>
                    <div className="shoppingCartHeaderTop">
                        <div className="cartTitle">Shopping Cart</div>
                        <div>Price</div>
                    </div>

                    {cartItems.map((val) => {
                        return (
                            <div key={val._id} className="shoppingCartHeaderDetails">
                                <div className="cartItemBox">
                                    <div>
                                        <img src={val.image} alt="Product Logo" />
                                    </div>
                                    <div className="cartQuantity">
                                        <div>{val.title}</div>
                                        <div>Qty : {selectedQuantity[val._id]}</div>
                                    </div>
                                </div>
                                <div>
                                    <b>${val.price}</b>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="cartSubtotalBox">
                    <div>
                        <div>
                            <button onClick={() => alert("Thank you for shopping with us")}>Place order</button>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "small",
                                flexWrap: "wrap"
                            }}
                        >
                            <div>Items</div>
                            <div>${orderDetails.totalPrice}</div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "small",
                                flexWrap: "wrap"
                            }}
                        >
                            <div>Shipping</div>
                            <div>${orderDetails.shippingPrice}</div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "small" }}>
                            <div>Tax</div>
                            <div>${orderDetails.tax}</div>
                        </div>
                        <div
                            style={{
                                display        : "flex",
                                justifyContent : "space-between",
                                fontSize       : "medium",
                                color          : "red",
                                flexWrap       : "wrap"
                            }}
                        >
                            <div>Order Total</div>
                            <div>${orderDetails.orderTotal}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrderScreen;
