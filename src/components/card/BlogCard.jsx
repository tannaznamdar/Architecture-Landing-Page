export default function BlogCard({ blogCard }) {
  return (
      <div>
        <div className="">
          <figure className="h-[380px] mb-2.5">
            <img
              className="w-full h-full object-cover"
              src={blogCard.image}
              alt="#"
            />
          </figure>
          <div className="flex flex-col gap-[5px]">
            <span className="font-raleway text-lg font-semibold text-[#3D3D3D] mb-2.5">
              {blogCard.category}
            </span>
            <span className="font-raleway text-[32px] font-bold text-black mb-6">
              {blogCard.title}
            </span>
          </div>
        </div>

        <div>
          <p className=" font-inconsolata text-[16px] font-medium text-[#3D3D3D] text-justify">
            {blogCard.description}
          </p>
        </div>
      </div>
  );
}
