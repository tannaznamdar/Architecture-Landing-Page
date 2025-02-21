import Logo from "./Logo";
import MenuList from "./MenuList";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Header({ menuList }) {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-10">
        <Logo />
        <MenuList menuList={menuList} />
        <div>
          <button className="flex border px-[25px] py-[11px] gap-3.5 items-center cursor-pointer">
            <span className="text-lg font-bold text-gray-800">CONTACT US</span>
            <ArrowUpRightIcon className="size-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
