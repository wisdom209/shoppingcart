import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StepComponent from "../Components/StepComponent";
import UpdateShippingDetails from "../Redux/Actions.js/UpdateShippingDetails";

function ShippingScreen(props) {
    const step1 = { borderTop: "0.5rem solid #ffa500" };
    const step2 = { borderTop: "0.5rem solid #ffa500" };
    const step3 = { borderTop: "0.5rem solid #c0c0c0" };
    const step4 = { borderTop: "0.5rem solid #c0c0c0" };

    const shippingDetails = useSelector((state) => state.shippingDetails);
    const dispatch = useDispatch();

    const continueToPayment = (e) => {
        e.preventDefault();

        props.history.push("/payment");
    };

    return (
        <center>
            <StepComponent step1={step1} step2={step2} step3={step3} step4={step4} />
            <center className="signInDiv">
                <form onSubmit={continueToPayment}>
                    <div className="signInHeader">
                        <b>Shipping To</b>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="Address">
                            <div>
                                <b>Address</b>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={shippingDetails.address}
                                    onChange={(e) => {
                                        dispatch(
                                            UpdateShippingDetails({
                                                address       : e.target.value,
                                                city          : shippingDetails.city,
                                                postalCode    : shippingDetails.postalCode,
                                                country       : shippingDetails.country,
                                                paymentMethod : ""
                                            })
                                        );
                                    }}
                                    required
                                />
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="City">
                            <div>
                                <b>City</b>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={shippingDetails.city}
                                    onChange={(e) => {
                                        dispatch(
                                            UpdateShippingDetails({
                                                address       : shippingDetails.address,
                                                city          : e.target.value,
                                                postalCode    : shippingDetails.postalCode,
                                                country       : shippingDetails.country,
                                                paymentMethod : ""
                                            })
                                        );
                                    }}
                                    required
                                />
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="Postal code">
                            <div>
                                {" "}
                                <b>Postal code</b>{" "}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={shippingDetails.postalCode}
                                    onChange={(e) => {
                                        dispatch(
                                            UpdateShippingDetails({
                                                address       : shippingDetails.address,
                                                city          : shippingDetails.city,
                                                postalCode    : e.target.value,
                                                country       : shippingDetails.country,
                                                paymentMethod : ""
                                            })
                                        );
                                    }}
                                    required
                                />
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="Country">
                            <div>
                                {" "}
                                <b>Country</b>{" "}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={shippingDetails.country}
                                    onChange={(e) => {
                                        dispatch(
                                            UpdateShippingDetails({
                                                address       : shippingDetails.address,
                                                city          : shippingDetails.city,
                                                postalCode    : shippingDetails.postalCode,
                                                country       : e.target.value,
                                                paymentMethod : ""
                                            })
                                        );
                                    }}
                                    required
                                />
                            </div>
                        </label>
                    </div>

                    <div className="inputDiv">
                        <button className="signInBtn" type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </center>
        </center>
    );
}

export default ShippingScreen;
