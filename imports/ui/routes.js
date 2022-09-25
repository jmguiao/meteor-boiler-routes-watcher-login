import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { Meteor } from "meteor/meteor";
import Register  from "./components/Register";
import  Login  from "./components/Login";
import App from "./App";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./Notfound";

Meteor.startup(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>,
      document.getElementById("react-target")
    );
});
