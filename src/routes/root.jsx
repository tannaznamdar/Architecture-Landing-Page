import { Outlet } from "react-router";
import Header from "../components/header/Header";

export default function Root() {
  return (
    <div>
      <Header />
      
      <div>
        <Outlet />
      </div>
    </div>
  );
}
