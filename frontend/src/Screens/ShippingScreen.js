import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StepComponent from "../Components/StepComponent";
import UpdateShippingDetails from "../Redux/Actions.js/UpdateShippingDetails";

function ShippingScreen(props) {
    const step1 = { borderTop: "0.5rem solid #ffa500" };
    const step2 = { borderTop: "0.5rem solid #ffa500" };
    const step3 = { borderTop: "0.5rem solid #c0c0c0" };
    const step4 = { borderTop: "0.5rem solid #c0c0c0" };

    const dispatch = useDispatch();

    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ postalCode, setPostalCode ] = useState("");
    const [ country, setCountry ] = useState("");

    const continueToPayment = (e) => {
        e.preventDefault();
        dispatch(
            UpdateShippingDetails({
                address,
                city,
                postalCode,
                country,
                paymentMethod : ""
            })
        );
        props.history.push("/payment")
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
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="City">
                            <div>
                                <b>City</b>
                            </div>
                            <div>
                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
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
                                <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
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
                                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
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
