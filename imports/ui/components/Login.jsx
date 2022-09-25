import React from "react";
import { Link, Navigate} from "react-router-dom";
import AppW from "../../api/classes/client/App";


class Login extends React.Component { 
    constructor(props){ 
        super(props);   
        AppW.setWatcher(this, "UNIQUEID");    
    }

    loginUser=()=> {
        const email = AppW.loginConfig.email;
        const password = AppW.loginConfig.password;
        
        Meteor.loginWithPassword(email, password, (error) => {
            if (error) {
                AppW.setLoginConfig("info", "Email or password in incorrect...");
            } else {
           
                AppW.setLoginConfig("isLogin", true);
            }
        });   
    };
       
    render(){
        const isLog = AppW.loginConfig.isLogin;
        //console.log("start", isLog);
        if(isLog !== false) {
            return <Navigate to="/"/>;
        }
        
        return (
      <div>
        {/* <div className="navbar">
          <a href="/">
            <img src="google-app.png" alt="Gapp" width="300" height="90" />
          </a>
        </div> */}
        <div className="box">
          <h1>Login</h1>

          <h5 className="info">{this.info}</h5>
          {/* <form onSubmit={loginUser}> */}
          
            <input
              className="input-fields"
              onChange={(e) => AppW.setLoginConfig("email", e.target.value)}
              type="email"
              placeholder="Email"
            />
            <br />
            <input
              className="input-fields"
              onChange={(e) => AppW.setLoginConfig("password", e.target.value)}
              type="password"
              placeholder="Password"
            />
            <br />
          <button onClick={this.loginUser}>Login</button>
            <br />
            <Link to="/register">Register</Link>
    
        </div>
      </div>
        );
    }
  }
export default Login;
