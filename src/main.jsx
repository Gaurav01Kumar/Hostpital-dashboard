import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassord from "./pages/ForgotPassword.jsx";
import Verification from "./pages/Verification.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import UserRegistration from "./pages/UserRegistration.jsx";
import Report from "./pages/Report.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/dashboard/registration",
        element: <UserRegistration />,
      },
      {
        path:"/dashboard/report",
        element:<Report />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassord />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
