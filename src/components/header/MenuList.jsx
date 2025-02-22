import { NavLink } from "react-router";

export default function MenuList({ menuList }) {
  return (
    <nav>
      <ul className="flex font-inconsolata  text-xl uppercase  gap-[50px] ">
        {menuList.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive, isPending }) =>
              `${
                isActive ? "underline font-bold text-black" : ""
              } font-semibold  text-gray-800 underline-offset-5 decoration-2 decoration-gray-600 tracking-tight cursor-pointer`
            }
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
