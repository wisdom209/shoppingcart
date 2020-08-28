import React from "react";
import { Link } from "react-router-dom";

function CreateAccount() {
    return (
        <center>
            <center className="signInDiv">
                <form>
                    <div className="signInHeader">
                        <b>Create Account</b>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="Name">
                            <div>
                                <b>Name</b>
                            </div>
                            <div>
                                <input type="text" value="" />
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="email">
                            <div>
                                <b>Email</b>
                            </div>
                            <div>
                                <input type="email" value="" />
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">
                            <div>
                                {" "}
                                <b>Password</b>{" "}
                            </div>
                            <div>
                                <input type="password" value="" />
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">
                            <div>
                                {" "}
                                <b>Re-enter Password</b>{" "}
                            </div>
                            <div>
                                <input type="password" value="" />
                            </div>
                        </label>
                    </div>

                    <div className="inputDiv">
                        <button className="signInBtn">Create your amazona account</button>
                    </div>
                    <div className="inputDiv">
                        <div>
                            <b>Already have an account?</b> &nbsp; <Link to="/signin">Sign in</Link>
                        </div>
                    </div>
                </form>
            </center>
        </center>
    );
}

export default CreateAccount;
