import { NavLink } from "react-router";

export default function FooterMenu({ menuItems }) {
  return (
    <nav>
      <ul className="flex flex-col gap-1 uppercase">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive, isPending }) =>
              `${
                isActive
                  ? "text-black font-bold"
                  : "text-[#3D3D3D] font-semibold"
              } cursor-pointer font-inconsolata text-[16px]`
            }
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
