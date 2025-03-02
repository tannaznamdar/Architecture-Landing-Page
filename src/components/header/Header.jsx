import { Link } from "react-router";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const menuList = [
    { name: "Home", href: "/", current: true },
    { name: "About us", href: "/about-us", current: false },
    { name: "Services", href: "/services", current: false },
    { name: "Blog", href: "/blog", current: false },
  ];

  return (
    <header className="container mx-auto mt-7">
      <div className="flex items-center justify-between py-10">
        <Logo />
        <MenuList menuList={menuList} />
        <div>
          <Link to="/contact-us">
            <button className="flex border px-[25px] py-[11px] gap-3.5 items-center cursor-pointer font-inconsolata text-lg font-bold leading-0">
              CONTACT US
              <ArrowUpRightIcon className="size-5 text-black" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
