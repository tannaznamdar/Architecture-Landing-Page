import "./App.css";
import Logo from "./assets/components/Logo";
import MenuList from "./assets/components/MenuList";

export default function App() {

  let menuList =[ 'Home' , 'About us' , 'Services' , 'Blog']


  return (
    <>
      <div className="container mx-auto">
        <div className="mt-7">
          <Logo />
          <MenuList menuList={menuList} />
        </div>
      </div>
    </>
  );
}
