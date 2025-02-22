import { createBrowserRouter } from "react-router";
import Root from "./root";
import HomePage from "../views/HomePage";
import AboutUsPage from "../views/AboutUsPage";
import ServicesPage from "../views/ServicesPage";
import BlogPage from "../views/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about-us",
        element: <AboutUsPage />
      },
      {
        path: "/services",
        element: <ServicesPage />
      },
      {
        path: "/blog",
        element: <BlogPage />
      },
    ],
  },
]);

export default router;
