import { createBrowserRouter } from "react-router";
import Root from "./root";
import HomePage from "../views/HomePage";
import AboutUsPage from "../views/AboutUsPage";
import ServicesPage from "../views/ServicesPage";
import BlogPage from "../views/BlogPage";
import ContactUsPage from "../views/ContactUsPage";
import SinglePage from "../views/SinglePage";

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
      {
        path: "/contact-us",
        element: <ContactUsPage />
      },
      {
        path: "/single-page/:category",
        element: <SinglePage />
      },
    ],
  },
]);

export default router;
