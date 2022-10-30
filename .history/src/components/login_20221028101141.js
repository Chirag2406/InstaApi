import React from "react";
import "./login.css";

const Login=()=>{
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button className="login-btn">Login</button>
            <p className="text">Or Login Using</p>
            <div className="alt-login">
                <div className="google"></div>
                <div className="instagram"></div>
            </div>
        </div>
    )
}
export default Login;