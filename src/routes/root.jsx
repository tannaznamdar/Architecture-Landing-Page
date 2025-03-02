import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Root() {
  return (
    <div>
      <ScrollToTop />
      <Header />

      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
