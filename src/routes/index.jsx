import { createBrowserRouter } from "react-router";
import Root from "./root";
import HomePage from "../views/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
    ],
  },
]);

export default router;
