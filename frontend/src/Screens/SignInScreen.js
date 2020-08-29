import React from "react";
import { Link } from "react-router-dom";

function SignInScreen() {
     
    return (
        <center>

            <center className="signInDiv">
                <form>
                    <div className="signInHeader">
                        <b>Sign-in</b>
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
                        <button className="signInBtn">S I G N&nbsp; I N</button>
                    </div>
                    <div className="inputDiv">
                        <div>
                            <b>New to Amazona?</b>
                        </div>
                    </div>
                    <div className="inputDiv">
                        <Link to="/createaccount">
                            <div className="createAccBtn">Create your Amazona account</div>
                        </Link>
                    </div>
                </form>
            </center>
        </center>
    );
}

export default SignInScreen;
