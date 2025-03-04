import { NavLink } from "react-router";

export default function MenuList({ menuList }) {
  return (
    <nav>
      <ul className="lg:flex hidden font-inconsolata  text-xl uppercase  gap-[50px] ">
        {menuList.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive, isPending }) =>
              `${
                isActive ? "text-black underline font-bold underline-offset-5 decoration-2 decoration-gray-600 text-xl" : "text-gray-700 font-semibold text-xl "
              } cursor-pointer `
            }
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
