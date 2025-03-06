import { Link } from "react-router";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { ArrowUpRightIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const showMenuHandler = () => {
    setMobileMenu(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenuHandler = () => {
    setMobileMenu(false);
    document.body.style.overflow = "auto";
  };

  const menuList = [
    { name: "Home", href: "/", current: true },
    { name: "About us", href: "/about-us", current: false },
    { name: "Services", href: "/services", current: false },
    { name: "Blog", href: "/blog", current: false },
  ];

  return (
    <header className="container mx-auto lg:px-0 px-6 lg:mt-7">
      <div className="flex items-center justify-between py-10">
        <Logo />
        <MenuList menuList={menuList} />
        <div className="lg:block hidden">
          <Link to="/contact-us">
            <button className="flex border px-[25px] py-[11px] gap-3.5 items-center cursor-pointer font-inconsolata text-lg font-bold leading-0">
              CONTACT US
              <ArrowUpRightIcon className="size-5 text-black" />
            </button>
          </Link>
        </div>

        <div
          className={`lg:hidden ${mobileMenu ? "hidden" : "block"}`}
          onClick={showMenuHandler}
        >
          <button>
            <Bars3Icon className="size-7 text-black" />
          </button>
        </div>

        <div
          onClick={closeMenuHandler}
          className={`lg:hidden fixed inset-0 z-10 bg-gray-900/30 backdrop-blur-sm transition-all duration-300 ${
            mobileMenu ? "block" : "hidden"
          }`}
        ></div>

        <div className={`lg:hidden ${mobileMenu ? "block" : "hidden"}`}>
          <MobileMenu menuList={menuList} closeMenu={closeMenuHandler} setMobileMenu={setMobileMenu} />
        </div>
      </div>
    </header>
  );
}
