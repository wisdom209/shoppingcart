import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import UpdateGlobalName from "../Redux/Actions.js/UpdateGlobalName";

function CreateAccount(props) {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            axios
                .post("api/users/register", { name, email, password })
                .then((response) => {
                    console.log(response.data);
                    Cookie.set("token", response.data.token);
                    dispatch(UpdateGlobalName(response.data.name));
                    Cookie.set("globalName", response.data.name);
                })
                .catch((err) => console.log(err));
            props.history.push("/");
        }
        else {
            //show user info that passwords do not match
        }
    };

    return (
        <center>
            <center className="signInDiv">
                <form onSubmit={handleSubmit}>
                    <div className="signInHeader">
                        <b>Create Account</b>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="Name">
                            <div>
                                <b>Name</b>
                            </div>
                            <div>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="email">
                            <div>
                                <b>Email</b>
                            </div>
                            <div>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>

                    <div className="inputDiv">
                        <button className="signInBtn" type="submit">
                            Create your amazona account
                        </button>
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
