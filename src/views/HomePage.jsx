import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import image4 from "../assets/images/image-4.png";
import image5 from "../assets/images/image-5.png";
import image6 from "../assets/images/image-6.png";
import image7 from "../assets/images/image-7.png";
import image8 from "../assets/images/image-8.png";
import logo1 from "../assets/images/Logo1.png";
import logo2 from "../assets/images/Logo2.png";
import logo3 from "../assets/images/Logo3.png";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";

import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import LogoSwiper from "../components/swiper/Logo-swiper";
import CardComponent from "../components/CardComponent";
import { NavLink } from "react-router";

export default function HomePage() {
  const logoImage = [
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
  ];

  const companyUsers = [
    {
      id: 1,
      image: user1,
      name: "Menta Nia",
      CompanyName: "Company Name",
      description:
        "“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “",
    },
    {
      id: 2,
      image: user2,
      name: "Sannad",
      CompanyName: "Company Name",
      description:
        "“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “",
    },
    {
      id: 3,
      image: user3,
      name: "George",
      CompanyName: "Company Name",
      description:
        "“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “",
    },
  ];

  return (
    <>
      {/* section 1 */}
      <div className="w-[90%] ml-auto mb-[90px]">
        <div className="flex items-center">
          <div className="w-1/2">
            <div className="w-3/4">
              <h2 className="text-[52px] font-raleway font-bold leading-16 capitalize mb-9 ">
                Create a modern and unique design your dream
              </h2>
              <p className="mb-[50px] font-inconsolata font-semibold text-[#3D3D3D] text-lg text-justify pr-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing dui tellus commodo convallis. Auctor eget orci
                pharetra non. Integer lorem in scelerisque tortor dui tempor
              </p>
              <button className="bg-black px-6 py-2.5 flex gap-3.5 items-center uppercase cursor-pointer">
                <span className="text-white text-lg font-semibold font-inconsolata leading-0">
                  VIEW A PROJECT
                </span>
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

      {/* logo-swiper */}
      <div className="container mx-auto flex mb-[90px]">
        <div className="w-1/4">
          <div className="w-1/2">
            <span className="text-black font-raleway font-bold text-2xl ">
              Trusted by 75+ Partners
            </span>
          </div>
        </div>
        <div className="w-3/4">
          <LogoSwiper logoImage={logoImage} />
        </div>
      </div>

      {/* section 2 */}
      <div className="container mx-auto mb-[90px]">
        <div className="flex items-center">
          <div className="flex gap-6 w-1/2">
            <div>
              <figure className="w-[320px] h-[430px]">
                <img className="h-full w-full object-cover" src={image3} />
              </figure>
            </div>

            <div className="relative">
              <figure className="w-[320px] h-[320px]">
                <img className="h-full w-full object-cover" src={image2} />
              </figure>

              <div className="bg-[#F2F2F2] py-7 text-[#3D3D3D] flex divide-x-1 divide-gray-400 h-[120px] absolute right-0 mt-6">
                <div className="flex flex-col px-10">
                  <span className="font-bold font-raleway text-4xl">10</span>
                  <span className="text-lg font-semibold font-raleway">
                    years
                  </span>
                </div>
                <div className="flex flex-col gap-1 px-10">
                  <span className="font-bold font-raleway text-4xl">200+</span>
                  <span className="text-lg font-semibold font-raleway">
                    projects
                  </span>
                </div>
                <div className="flex flex-col gap-1 px-10">
                  <span className="font-bold font-raleway text-4xl">75</span>
                  <span className="text-lg font-semibold font-raleway">
                    Partners
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex gap-5 items-center mb-6">
              <span className="border-b-2 w-[80px]"></span>
              <span className="text-black font-semibold text-lg">
                Hello There
              </span>
            </div>
            <h2 className="text-[40px] font-raleway font-bold leading-16 capitalize mb-9">
              We work professionally and wholeheartedly
            </h2>
            <p className="mb-[50px] font-inconsolata font-medium text-[#3D3D3D] text-[16px] text-justify pr-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra
              non. Integer lorem in scelerisque tortor dui tempor, volutpat
              viverra faucibus. Sagittis maecenas tincidunt at purus. Amet non
              vel elit aliquet id dolor risus imperdiet vitae. Amet, sagittis
              mauris morbi erat velit id nullam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Adipiscing dui tellus commodo
              convallis.
            </p>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="container mx-auto mb-[90px]">
        <div className="flex gap-5 items-center mb-6">
          <span className="text-black font-semibold text-lg">Services</span>
          <span className="border-b-2 w-[80px]"></span>
        </div>
        <h2 className="text-[40px] font-raleway font-bold leading-16 capitalize mb-9">
          Our capacity to help make your wishes come true
        </h2>

        <div className="flex gap-[5px]">
          <div className="w-1/3 relative">
            <figure className="w-full h-[540px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={image4}
                alt="#"
              />
            </figure>
            <span className="capitalize font-bold text-2xl text-white font-raleway absolute left-6 bottom-6">
              interior design
            </span>
          </div>
          <div className="w-1/3 relative">
            <figure className="w-full h-[540px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={image5}
                alt="#"
              />
            </figure>
            <span className="capitalize font-bold text-2xl text-white font-raleway absolute left-6 bottom-6">
              architecture
            </span>
          </div>
          <div className="w-1/3 relative">
            <figure className="w-full h-[540px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={image6}
                alt="#"
              />
            </figure>
            <span className="capitalize font-bold text-2xl text-white font-raleway absolute left-6 bottom-6">
              furniture design
            </span>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="container mx-auto mb-[90px]">
        <div className="flex gap-5 items-center mb-6">
          <span className="text-black font-semibold text-lg">Our Project</span>
          <span className="border-b-2 w-[80px]"></span>
        </div>
        <h2 className="text-[40px] font-raleway font-bold leading-16 capitalize mb-9">
          Our latest projects
        </h2>

        <div className="relative">
          <figure className="w-full h-[540px]">
            <img className="w-full h-full object-cover" src={image7} alt="#" />
          </figure>

          <div className="absolute left-[50px] bottom-[50px] w-[18%]">
            <h2 className="font-semibold text-2xl font-raleway text-white mb-[25px]">
              Hanani Home
            </h2>
            <span className="text-[16px] text-white font-medium text-justify font-inconsolata">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra
              non.
            </span>
          </div>
        </div>
      </div>

      {/* company Users card */}
      <div className="container mx-auto mb-[90px]">
        <div className="flex gap-5 items-center mb-6">
          <span className="text-black font-semibold text-lg">Testimonial</span>
          <span className="border-b-2 w-[80px]"></span>
        </div>
        <h2 className="text-[40px] font-raleway font-bold leading-16 capitalize mb-9">
          What Our Clients Say
        </h2>

        <div className="flex gap-12">
          {companyUsers.map((item) => (
            <CardComponent companyUser={item} />
          ))}
        </div>
      </div>

      {/* contact us */}
      <div className="relative mb-[90px]">
        <figure className="h-[400px] w-full">
          <img className="w-full h-full object-cover" src={image8} alt="#" />
        </figure>
        <div className=" absolute top-[20%] left-[10%] w-[25%]">
          <h2 className="font-bold font-raleway text-[40px] mb-6">
            Have A Question ? Start Consultation Now
          </h2>
          <p className="font-inconsolata text-[16px] font-medium mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            dui tellus commodo convallis.
          </p>
          <NavLink>
            <button className="flex border px-[25px] py-[11px] gap-3.5 items-center cursor-pointer bg-black">
              <span className="font-inconsolata text-lg font-bold leading-0 text-white">
                CONTACT US
              </span>
              <ArrowUpRightIcon className="size-5 text-white" />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
