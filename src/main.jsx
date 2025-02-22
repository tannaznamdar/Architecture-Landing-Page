import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={AppRouter} />
  </div>
);
