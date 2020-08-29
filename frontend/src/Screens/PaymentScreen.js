import React from "react";
import StepComponent from "../Components/StepComponent";

function PaymentScreen() {
    const step1 = {borderTop: "0.5rem solid #ffa500"} 
    const step2 = {borderTop: "0.5rem solid #ffa500"} 
    const step3 = {borderTop: "0.5rem solid #ffa500"} 
    const step4 = {borderTop: "0.5rem solid #c0c0c0"} 
    
    return (
        <center>
            <StepComponent step1={step1} step2={step2} step3={step3} step4={step4}/>
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
