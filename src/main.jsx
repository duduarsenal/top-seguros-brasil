import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home/Home";
import Simulacao from "./pages/Simulacao/Simulacao";
import SeguroDetails from "./pages/SeguroDetails/SeguroDetails";
import Login from "./pages/Login/Login";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import ErrorPage from "./pages/Error/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/simulacao",
        element: <Simulacao />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Cadastrar />,
      },
      // Nested routes - identificador unico
      {
        path: "/seguros/:id",
        element: <SeguroDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
