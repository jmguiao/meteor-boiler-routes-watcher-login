import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { Meteor } from "meteor/meteor";
import App from "./App";
import NotFound from "./Notfound";

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("react-target")
  );
});
