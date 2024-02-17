import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../components/Loadable";
import MainLayout from "../layouts/mainLayout/MainLayout";
import Dashboard from "../pages/Dashboard";

const SamplePage = Loadable(lazy(() => import("../pages/SamplePage")));
const RootRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Navigate to="/dash" />,
    },
    {
      path: "/dash",
      element: <Dashboard />,
    },
    {
      path: "/sample-page",
      element: <SamplePage />,
    },
  ],
};

export default RootRoutes;
