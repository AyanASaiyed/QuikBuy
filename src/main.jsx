import React from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "../js/config.json";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopParent from "./Pages/MainPage/ShopParent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <ShopParent />,
  },
]);

console.log("AWS Config:", awsconfig);
Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
