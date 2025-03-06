export default function BlogCard({ blogCard }) {
  return (
    <div>
      <figure className="h-[380px] mb-2.5">
        <img
          className="w-full h-full object-cover"
          src={blogCard.image}
          alt="#"
        />
      </figure>
      <div className="flex flex-col gap-[5px]">
        <span className="font-raleway lg:text-lg text-sm font-semibold text-[#3D3D3D] mb-2.5">
          {blogCard.category}
        </span>
        <span className="font-raleway lg:text-[32px] text-2xl font-bold text-black mb-6">
          {blogCard.title}
        </span>
      </div>

      <div>
        <p className=" font-inconsolata lg:text-[16px] text-sm font-medium text-[#3D3D3D] text-justify">
          {blogCard.description}
        </p>
      </div>
    </div>
  );
}
