export default function CategoryCard({ CategoryCard }) {
  return (
    <div className="relative">
      <figure className="w-full h-[540px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={CategoryCard.image}
          alt="#"
        />
      </figure>
      <span className="capitalize font-bold text-2xl text-white font-raleway absolute left-6 bottom-6">
        {CategoryCard.category}
      </span>
    </div>
  );
}
