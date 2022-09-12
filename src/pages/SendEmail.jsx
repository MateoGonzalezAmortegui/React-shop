import React from "react";
import '@styles/RecoveryPassword.scss';
import logo from "@logos/logo_yard_sale.svg";
import email from "@icons/email.svg";

const RecoveryPassword = () => {
    return (
        <div className="login">
            {/*center all the elements*/}
            <div className="form-container email">
                {/*encapsula all the elements*/}
                <img src={logo} alt="logo" className="logo" />
                <h1 className="tittle">Email has been sent!</h1>
                <p className="subtittle">
                    Please check your inbox for instructions on how to reset the password
                </p>
                <div className="email-image">
                    <img src={email} alt="email" />
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default RecoveryPassword;