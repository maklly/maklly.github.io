import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Home from "../Home/Home";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import Messanger from "../Messanger/Messanger";
import Profile from "../Profile/Profile";
import Vacancies from "../Vacancies/Vacancies";

const ProjectRoutes = () => {
  return (
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.MESSANGER} element={<Messanger />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.VACANCIES} element={<Vacancies />} />
      </Routes>
  );
};

export default ProjectRoutes;
