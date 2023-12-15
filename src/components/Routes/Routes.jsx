import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Home from "../Home/Home";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";

const ProjectRoutes = () => {
  return (
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      </Routes>
  );
};

export default ProjectRoutes;
