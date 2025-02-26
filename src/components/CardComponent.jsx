export default function CardComponent({ companyUser }) {
  return (
    <div className="bg-[#F2F2F2] pl-10 pr-[57px] pt-10 pb-[77px] w-1/3">
      <div>
        <div className="mb-11 flex gap-[15px] items-center">
          <figure className="w-[80px] h-[80px]">
            <img
              className="w-full h-full object-cover"
              src={companyUser.image}
              alt="#"
            />
          </figure>
          <div className="flex flex-col gap-[5px]">
            <span className="font-raleway text-lg font-bold text-black">
              {companyUser.name}
            </span>
            <span className="font-raleway text-sm font-semibold text-[#3D3D3D]">
              {companyUser.CompanyName}
            </span>
          </div>
        </div>

        <div>
          <p className=" font-inconsolata text-[16px] font-medium text-[#3D3D3D] text-justify">
            {companyUser.description}
          </p>
        </div>
      </div>
    </div>
  );
}
