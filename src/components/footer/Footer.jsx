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
      <div className="bg-[#F2F2F2] pt-[75px] border-b-2 border-gray-200 flex gap-3 px-[10%]">
        <div className="w-2/6">
          <FooterLogo />
          <p className="pt-6 pr-20 font-medium font-inconsolata text-[16px] text-[#3D3D3D] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            dui tellus commodo convallis. Auctor eget orci pharetra non. Integer
            lorem in scelerisque tortor dui tempor, volutpat viverra faucibus.
          </p>
        </div>

        <div className="w-1/6">
          <h3 className="font-raleway font-bold text-lg text-black">About</h3>
          <div className="mb-6 pt-6">
            <FooterMenu menuItems={footerMenu} />
          </div>
        </div>

        <div className="w-1/6">
          <h3 className="font-raleway font-bold text-lg text-black">Office</h3>
          <div className="mb-6 pt-6">
            <FooterMenu menuItems={officeList} />
          </div>
        </div>

        <div className="w-2/6">
          <h3 className="font-raleway font-bold text-lg text-black">
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

      <div className="bg-[#F2F2F2] py-[17px] text-center">
          <span className="font-raleway text-lg font-medium ">
            Imah © 2022. All Rights Reseved.
          </span>
        </div>
    </footer>
  );
}
