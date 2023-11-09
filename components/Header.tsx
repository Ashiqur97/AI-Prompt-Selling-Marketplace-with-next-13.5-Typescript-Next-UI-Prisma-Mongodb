import React,{useState} from 'react'
import Link from "next/link";
import Navigation from "./Navigation";
import {AiOutlineSearch} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg'

type Props = {
    activeItem:number;
}

const Header = (activeItem: Props) => {
    const [active, setactive] = useState(false);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            setactive(true);
          } else {
            setactive(false);
          }
        });
      }
  return (
    <div className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${
        active && "fixed top-0 left-0 bg-[#000] z-[9999]"
      }`}>
        
        <div className='hidden md:w-[90%] mx-auto md:flex items-center justify-between'>
            <div>
                <Link href={"/"}>
                    <h1 className="font-Inter text-3xl cursor-pointer">
                        <span className='text-[#64ff4c]'>Bec</span>odemy
                    </h1>
                </Link>
            </div>

            <div className='flex'>
            <Navigation activeItem={activeItem} />
            </div>

            <div className='flex items-center ml-10'>
                <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer"/>

                <Link href="/sign-in">
                    <CgProfile className="text-[25px] cursor-pointer"/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header