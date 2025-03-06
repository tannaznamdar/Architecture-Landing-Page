import { Link } from "react-router";

export default function Logo(){
    return(
        <Link to="/" className="flex gap-0.5">
            <span className="font-raleway text-3xl text-black font-extrabold"> Ima </span>
            <div className="bg-black rounded-full  px-3 block">
                <span className="font-raleway text-[26px] text-white font-[900]"> h </span>
            </div>
        </Link>
    )
}