import React from "react";

function ShippingScreen() {
    return (
        <center>
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
