import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Root() {
  return (
    <div>
      <Header />
      
      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
