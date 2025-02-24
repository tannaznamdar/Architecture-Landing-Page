import image1 from "../assets/images/image-1.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function HomePage() {
  return (
    <>
      <div className="w-[90%] ml-auto">
        <div className="flex items-center">
          <div className="w-1/2">
            <div className="w-3/4">
              <h2 className="text-[52px] font-raleway font-bold leading-16 capitalize mb-9 ">
                Create a modern and unique design your dream
              </h2>
              <p className="mb-[50px] font-inconsolata font-semibold text-lg text-justify pr-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing dui tellus commodo convallis. Auctor eget orci
                pharetra non. Integer lorem in scelerisque tortor dui tempor
              </p>
              <button className="bg-black px-6 py-2.5 flex gap-3.5 items-center uppercase cursor-pointer">
                <span className="text-white text-lg font-semibold font-inconsolata leading-0"> VIEW A PROJECT </span>
                <ArrowRightIcon className="size-5 text-white" />
              </button>
            </div>
          </div>

          <div className="w-1/2">
            <figure className="h-[500px]">
              <img
                className="w-full h-full object-cover"
                src={image1}
                alt="#"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
