import interior1 from "../assets/images/image-1.png";
import interior2 from "../assets/images/villa-interior2.jpg";
import interior3 from "../assets/images/villa-interior3.jpg";
import interior4 from "../assets/images/villa-interior4.jpg";
import interior5 from "../assets/images/villa-interior5.jpg";

import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import image4 from "../assets/images/image-4.png";
import image5 from "../assets/images/image-5.png";
import image6 from "../assets/images/image-6.png";
import image7 from "../assets/images/image-7.png";
import image8 from "../assets/images/image-8.png";
import image9 from "../assets/images/image-9.png";
import image10 from "../assets/images/image-10.png";
import image11 from "../assets/images/image-11.png";
import image12 from "../assets/images/image-12.jpg";
import image13 from "../assets/images/image-13.jpg";
import image14 from "../assets/images/image-14.jpg";

import logo1 from "../assets/images/Logo1.png";
import logo2 from "../assets/images/Logo2.png";
import logo3 from "../assets/images/Logo3.png";

import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";

import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import LogoSwiper from "../components/swiper/LogoSwiper";
import { href, NavLink } from "react-router";
import BlogCard from "../components/card/BlogCard";
import CategoryCard from "../components/card/CategoryCard";
import ImageSwiper from "../components/swiper/ImageSwiper";
import BannerSwiper from "../components/swiper/BannerSwiper";
import UsersCardsSwiper from "../components/swiper/UsersCardsSwiper";

export default function HomePage() {
  const projectImg = [interior1, interior2, interior3, interior4, interior5];

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

  const boxInfo = [
    { id: 1, title: "10", subTitle: "years" },
    { id: 2, title: "200+", subTitle: "projects" },
    { id: 3, title: "75", subTitle: "Partners" },
  ];

  const categoryCards = [
    { id: 1, image: image4, category: "interior design" },
    { id: 2, image: image5, category: "architecture" },
    { id: 3, image: image6, category: "furniture design" },
  ];

  const banner = [
    {
      id: 1,
      image: image14,
      title: "dream Home",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non. ",
    },
    {
      id: 2,
      image: image7,
      title: "Hanani Home",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non. ",
    },
    {
      id: 3,
      image: image12,
      title: "Niyavaran Home",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non. ",
    },
    {
      id: 4,
      image: image13,
      title: "we Home",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non. ",
    }
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
    {
      id: 4,
      image: user2,
      name: "Sannad",
      CompanyName: "Company Name",
      description:
        "“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “",
    },
    {
      id: 5,
      image: user3,
      name: "George",
      CompanyName: "Company Name",
      description:
        "“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “",
    },
  ];

  const blogCards = [
    {
      id: 1,
      image: image9,
      category: "Interior Design",
      title: "Designer must be an interpreter",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non.",
    },
    {
      id: 2,
      image: image10,
      category: "Interior Design",
      title: "12 Best Outdoor Furniture Ideas ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non.",
    },
    {
      id: 3,
      image: image11,
      category: "Architecture",
      title: "10 Of The Unique Buildings ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non.",
    },
  ];

  return (
    <>
      {/* project-slider */}
      <div className="lg:w-[90%] ml-auto lg:mb-[90px] mb-[50px] ">
        <div className="flex lg:flex-row flex-col items-center">
          <div className="lg:w-1/2 w-full">
            <div className="lg:w-3/4 w-full">
              <h2 className="lg:text-[52px] text-[32px] font-raleway font-bold lg:leading-16 capitalize mb-9 lg:px-0 px-6">
                Create a modern and unique design your dream
              </h2>
              <p className="mb-[50px] font-inconsolata font-semibold text-[#3D3D3D] lg:text-lg text-sm text-justify lg:pr-40 px-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing dui tellus commodo convallis. Auctor eget orci
                pharetra non. Integer lorem in scelerisque tortor dui tempor
              </p>
              <button className="bg-black px-6 py-2.5 flex gap-3.5 items-center uppercase cursor-pointer mb-[50px] lg:mb-0 lg:ml-0 ml-6">
                <span className="text-white lg:text-lg text-sm font-semibold font-inconsolata uppercase leading-0 ">
                  View a project
                </span>
                <ArrowRightIcon className="size-5 text-white" />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <ImageSwiper projectImg={projectImg} />
          </div>
        </div>
      </div>

      {/* logo-swiper */}
      <div className="container mx-auto lg:px-0 px-6 flex lg:flex-row flex-col lg:mb-[90px] mb-[50px]">
        <div className="lg:w-1/4">
          <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center lg:justify-normal">
            <span className="text-black font-raleway font-bold lg:text-2xl text-xl">
              Trusted by 75+ Partners
            </span>
          </div>
        </div>
        <div className="lg:w-3/4 w-full">
          <LogoSwiper logoImage={logoImage} />
        </div>
      </div>

      {/* section 1 */}
      <div className="container mx-auto lg:mb-[90px] mb-[50px]">
        <div className="flex lg:flex-row flex-col items-center">
          <div className="flex md:gap-6 gap-3.5 lg:w-1/2">
            <div>
              <figure className="md:w-[320px] md:h-[430px] w-[163px] h-[220px]">
                <img className="h-full w-full object-cover" src={image3} />
              </figure>
            </div>

            <div className="relative">
              <figure className="md:w-[320px] md:h-[320px] w-[163px] h-[163px]">
                <img className="h-full w-full object-cover" src={image2} />
              </figure>

              <div className="bg-[#F2F2F2] md:py-7 py-5 text-[#3D3D3D] flex divide-x-1 divide-gray-400 h-[120px] absolute right-[-34px] md:mt-4 mt-3 shadow-md shadow-gray-300">
                {boxInfo.map((item) => (
                  <div className="flex flex-col md:px-10 px-7 items-center justify-center">
                    <span className="font-bold font-raleway md:text-4xl text-2xl">
                      {item.title}
                    </span>
                    <span className="md:text-lg text-sm font-semibold font-raleway">
                      {item.subTitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mt-0 mt-30 lg:pl-0 pl-6">
            <div className="flex gap-5 items-center mb-6">
              <span className="border-b-2 w-[80px]"></span>
              <span className="text-black font-semibold lg:text-lg text-sm">
                Hello There
              </span>
            </div>
            <h2 className="md:text-[40px] text-2xl font-raleway font-bold lg:leading-16 capitalize md:mb-9 mb-4">
              We work professionally and wholeheartedly
            </h2>
            <p className="font-inconsolata font-medium text-[#3D3D3D] md:text-[16px] text-sm text-justify lg:pr-40 pr-6">
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

      {/* Category Card */}
      <div className="container mx-auto lg:px-0 px-6 lg:mb-[90px] mb-[50px]">
        <div className="flex gap-5 items-center mb-6">
          <span className="text-black font-semibold lg:text-lg text-sm">
            Services
          </span>
          <span className="border-b-2 w-[80px]"></span>
        </div>
        <h2 className="lg:text-[40px] text-2xl font-raleway font-bold lg:leading-16 capitalize mb-9">
          Our capacity to help make your wishes come true
        </h2>

        <div className=" gap-x-[5px] gap-y-6 grid lg:grid-cols-3">
          {categoryCards.map((item) => (
            <CategoryCard key={item.id} CategoryCard={item} />
          ))}
        </div>
      </div>

      {/* section 4 */}
      <div className="max-w-none lg:container mx-auto lg:px-0 lg:mb-[90px] mb-[50px]">
        <div className="flex gap-5 items-center mb-6 lg:px-0 px-6">
          <span className="text-black font-semibold lg:text-lg text-sm">
            Our Project
          </span>
          <span className="border-b-2 w-[80px]"></span>
        </div>
        <h2 className="lg:text-[40px] text-2xl font-raleway font-bold lg:leading-16 capitalize mb-9 lg:px-0 px-6">
          Our latest projects
        </h2>

        <BannerSwiper banner={banner} />
      </div>

      {/* company Users swiper */}
      <div className="container mx-auto lg:px-0 px-6 lg:mb-[90px] mb-[50px]">
        <div className="flex gap-5 items-center mb-6">
          <span className="text-black font-semibold lg:text-lg text-sm">Testimonial</span>
          <span className="border-b-2 w-[80px]"></span>
        </div>
        <h2 className="lg:text-[40px] text-2xl font-raleway font-bold lg:leading-16 capitalize mb-9">
          What Our Clients Say
        </h2>

        <div>
         <UsersCardsSwiper companyUsers={companyUsers} />
        </div>
      </div>

      {/* contact us */}
      {/* <div className="relative mb-[90px]">
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
      </div> */}

      {/* blog */}
      {/* <div className="container mx-auto mb-[90px]">
        <div className="flex gap-5 items-center mb-6">
          <span className="text-black font-semibold text-lg">Our Blog</span>
          <span className="border-b-2 w-[80px]"></span>
        </div>
        <h2 className="text-[40px] font-raleway font-bold leading-16 capitalize mb-9">
          Latest News and Articles
        </h2>

        <div className="grid grid-cols-3 gap-x-12 gap-y-20">
          {blogCards.map((item) => (
            <BlogCard blogCard={item} />
          ))}
        </div>
      </div> */}
    </>
  );
}
