import { Link, NavLink } from "react-router";
import { XMarkIcon } from "@heroicons/react/24/solid";
import FooterLogo from "../footer/FooterLogo";

export default function MobileMenu({ menuList, setMobileMenu }) {
  return (
    <div className="md:w-[50%] w-[70%] bg-[#F2F2F2] h-screen fixed top-0 right-0 px-10 py-12 z-20">
      <div className="flex items-center justify-between mb-8">
        <FooterLogo />
        <XMarkIcon
          className="size-6 text-red-800"
          onClick={() => setMobileMenu(false)}
        />
      </div>

      <nav>
        <ul className="flex-col items-end text-right font-inconsolata text-xl uppercase">
          {menuList.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive, isPending }) =>
                `${
                  isActive
                    ? "text-black font-bold decoration-2 decoration-gray-600 text-xl"
                    : "text-gray-700 font-semibold text-xl "
                } cursor-pointer`
              }
            >
              <li className="border-b border-gray-400 py-5">{item.name}</li>
            </NavLink>
          ))}

          <div className="w-full border-b border-gray-400 py-5">
            <Link to="/contact-us">CONTACT US</Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
