import React from "react";
import StepComponent from "../Components/StepComponent";

function ShippingScreen() {
    const step1 = { borderTop: "0.5rem solid #ffa500" };
    const step2 = { borderTop: "0.5rem solid #ffa500" };
    const step3 = { borderTop: "0.5rem solid #c0c0c0" };
    const step4 = { borderTop: "0.5rem solid #c0c0c0" };

    return (
        <center>
            <StepComponent step1={step1} step2={step2} step3={step3} step4={step4} />
            <center className="signInDiv">
                <form>
                    <div className="signInHeader">
                        <b>Create Account</b>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="Address">
                            <div>
                                <b>Address</b>
                            </div>
                            <div>
                                <input type="text" value="" />
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="City">
                            <div>
                                <b>City</b>
                            </div>
                            <div>
                                <input type="text" value="" />
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
                                <input type="text" value="" />
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
                                <input type="text" value="" />
                            </div>
                        </label>
                    </div>

                    <div className="inputDiv">
                        <button className="signInBtn">Continue</button>
                    </div>
                </form>
            </center>
        </center>
    );
}

export default ShippingScreen;
