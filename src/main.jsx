import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import Info from "./routes/Info";
import ErrorPage from "./error-page";
import { LoginProvider } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoginProvider>
        <Login />
      </LoginProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/admin",
    element: (
      <LoginProvider>
        <Admin />
      </LoginProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
