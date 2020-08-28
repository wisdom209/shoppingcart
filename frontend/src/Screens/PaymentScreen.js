import React from "react";

function PaymentScreen() {
    return (
        <center>
            <center className="signInDiv">
                <form>
                    <div className="signInHeader">
                        <b>Payment</b>
                    </div>
                    <div className="checkBoxDiv">
                        <label htmlFor="Paypal">
                            <input  type="checkbox" name="paypal" /> &nbsp;
                            <b>Paypal</b>
                           
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

export default PaymentScreen;
