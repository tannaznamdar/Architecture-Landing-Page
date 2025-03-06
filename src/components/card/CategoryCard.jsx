import { Link } from "react-router";

export default function CategoryCard({ CategoryCard }) {
  return (
    <div className="relative cursor-pointer">
      <Link to={`/single-page/${CategoryCard.category.replace(/\s+/g, "-")}`}>
        <figure className="w-full md:h-[540px] h-[450px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={CategoryCard.image}
            alt="#"
          />
        </figure>
        <span className="capitalize font-bold text-2xl text-white font-raleway absolute left-6 bottom-6">
          {CategoryCard.category}
        </span>
      </Link>
    </div>
  );
}
