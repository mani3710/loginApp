import React from 'react';
import './LogInPage.css';
import netflexIMG from '../netflex.png';
export default class LogInPage extends React.Component {
    render() {
        return (

            <div className="container">
                <img src={ require('../netflex.png') } className="titleStyle"/>
                <form className="loginComponentContainer">
                    <h2>LogIn</h2>
                    <div className="loginComponentEmail">
                        <label>Email*</label>
                        <input type="text" placeholder="Enter the EmailID" />

                    </div>
                    <div className="loginComponentPassword">
                        <label>Password*</label>
                        <input type="text" placeholder="Enter the Password" />

                    </div>
                    <label className="forgotPasswordLabel">forgot Password ?</label>
                    <input className="loginButton" type="submit" value="submit" title="LogIn"  >


                    </input>

                </form>
            </div>
        );
    }
}
