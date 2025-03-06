export default function CompanyUsersCard({ item }) {
  return (
    <div className="bg-[#F2F2F2] pl-10 pr-[57px] pt-10 pb-[77px] cursor-pointer">
      <div>
        <div className="mb-11 flex gap-[15px] items-center">
          <figure className="w-[80px] h-[80px]">
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt="#"
            />
          </figure>
          <div className="flex flex-col gap-[5px]">
            <span className="font-raleway text-lg font-bold text-black">
              {item.name}
            </span>
            <span className="font-raleway text-sm font-semibold text-[#3D3D3D]">
              {item.CompanyName}
            </span>
          </div>
        </div>

        <div>
          <p className=" font-inconsolata text-[16px] font-medium text-[#3D3D3D] text-justify">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
