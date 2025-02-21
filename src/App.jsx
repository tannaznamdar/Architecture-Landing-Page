import "./App.css";
import Header from "./assets/components/header/Header";

export default function App() {

  let menuList =[ 'Home' , 'About us' , 'Services' , 'Blog']


  return (
    <>
      <div className="container mx-auto">
        <div className="mt-7">
          <Header menuList={menuList} />
        </div>
      </div>
    </>
  );
}
