import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  const footerMenu = [
    { name: "Home", href: "/", current: true },
    { name: "About us", href: "/about-us", current: false },
    { name: "Services", href: "/services", current: false },
    { name: "Blog", href: "/blog", current: false },
    { name: "Contact Us", href: "/contact-Us", current: false },
  ];

  const officeList = [
    { name: "Scandinavian design", href: "4#", current: false },
    { name: "Smart House", href: "1#", current: false },
    { name: "Modern Design", href: "2#", current: false },
    { name: "Minimalist Design", href: "3#", current: false },
  ];

  return (
    <footer className="bottom-0">
      <div className="bg-[#F2F2F2] lg:pt-[75px] pt-[50px] border-b-2 border-gray-200 lg:flex gap-3 px-[10%] ">
        <div className="container mx-auto flex">
          <div className="lg:w-2/6 mb-[50px] lg:mb-0">
            <FooterLogo />
            <p className="pt-6 lg:pr-20 pr-0 font-medium font-inconsolata md:text-[16px] text-sm text-[#3D3D3D] text-justify border-b border-gray-300 lg:border-b-0 pb-[35px] lg:pb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra
              non. Integer lorem in scelerisque tortor dui tempor, volutpat
              viverra faucibus.
            </p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row lg:w-4/6">
            <div className="lg:w-2/4 md:flex">
              <div className="lg:w-1/2 w-full mb-[35px] lg:mb-0">
                <h3 className="font-raleway font-bold md:text-lg text-[16px] text-black">
                  About
                </h3>
                <div className="mb-6 pt-6">
                  <FooterMenu menuItems={footerMenu} />
                </div>
              </div>

              <div className="lg:w-1/2 w-full mb-[35px] lg:mb-0">
                <h3 className="font-raleway font-bold md:text-lg text-[16px] text-black">
                  Office
                </h3>
                <div className="mb-6 pt-6">
                  <FooterMenu menuItems={officeList} />
                </div>
              </div>
            </div>

            <div className="lg:w-2/4 w-full mb-[35px] lg:mb-0">
              <h3 className="font-raleway font-bold md:text-lg text-[16px] text-black">
                Stay Tuned for upadates
              </h3>
              <div className="pt-6 flex mb-10 ">
                <input
                  className="font-bold font-inconsolata text-lg border-b px-[5px] py-[3px] w-[60%] outline-0"
                  placeholder="Email"
                  type="email"
                />
                <button className="bg-black px-4">
                  <ArrowRightIcon className="size-5 text-white" />
                </button>
              </div>
              <div className="flex gap-8">
                <img src={instagram} alt="#" />
                <img src={facebook} alt="#" />
                <img src={twitter} alt="#" />
                <img src={youtube} alt="#" />
              </div>
            </div>
          </div>
        </div> 
      </div>
      <div className="bg-[#F2F2F2] py-[17px] text-center">
            <span className="font-raleway md:text-lg text-sm font-medium text-[#3D3D3D]">
              Imah © 2022. All Rights Reseved.
            </span>
          </div>
    </footer>
  );
}
