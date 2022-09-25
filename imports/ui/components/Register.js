import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
import AppW from "../../api/classes/client/App"
class Register extends React.Component { 
    constructor(props){ 
        super(props);    
        AppW.setWatcher(this, "UNIQUEID");
        
    }
    registerUser = () =>{
        const email = AppW.regConfig.email;
        const password = AppW.regConfig.password;
        const name = AppW.regConfig.name;
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                name : name,
                isActive: true
            }
        });
        // AppW.setRegConfig("email", "");
        // AppW.setRegConfig("password", "");
      
        AppW.setRegConfig("isReg", true);
      
    };

    render(){
        const isReg = AppW.regConfig.isReg;
        if(isReg !== false) {
            return <Navigate to="/login"/>;
        }
        return (
            <div>
              {/* <div className="navbar">
                <a href="/">
                  <img src="google-app.png" alt="Gapp" width="300" height="90" />
                </a>
              </div> */}
              <div className="box">
                <h1>Register</h1>
                <input
                    className="input-fields"
                    onChange={(e) => AppW.setRegConfig("name", e.target.value)}
                    type="text"
                    placeholder="Name"
                  />
                  <br />
                  <input
                    className="input-fields"
                    onChange={(e) => AppW.setRegConfig("email", e.target.value)}
                    type="email"
                    placeholder="Email"
                  />
                  <br />
                  <input
                    className="input-fields"
                    onChange={(e) => AppW.setRegConfig("password", e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                  <br />
                <button onClick={this.registerUser}>Register</button>
                  <Link to="/login">Login</Link>
               
              </div>
            </div>
        );
    }
          }
export default Register;