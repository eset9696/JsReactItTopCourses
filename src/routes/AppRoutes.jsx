import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import CardDetails from "../pages/CardDetails";

const routes = [
  { path: "/", element: <Home /> },
  { path: "cards", element: <Cards /> },
  { path: "cards/:id", element: <CardDetails /> },
];

/**
 * @param {RouteItem} route - Объект роута
 * @returns {JSX.Element} JSX element роута
 */

const renderRoute = ({ path, element, children }) => (
  <Route key={path} path={path} element={element}>
    {children && children.map(renderRoute)}
  </Route>
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {routes?.map(renderRoute)}
    </Route>
  </Routes>
);
export default AppRoutes;
