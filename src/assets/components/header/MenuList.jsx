export default function MenuList({ menuList }) {
  return (
    <nav>
      <ul className="flex font-inconsolata  text-xl uppercase  gap-[50px] ">
        {menuList.map((Item) => (
          <li className="hover:underline font-semibold hover:font-bold text-gray-800 hover:text-black underline-offset-5 decoration-2 decoration-gray-600 tracking-tight cursor-pointer">{Item}</li>
        ))}
      </ul>
    </nav>
  );
}
