import React from "react";
import { Navigate } from "react-router-dom";
import AppW from "../../api/classes/client/App";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    let isAuthenticated = AppW.loginConfig.isLogin;

    if (isAuthenticated == true) {
        return children;
    }

    return <Navigate to="/login" />;
};
export default PrivateRoute;
