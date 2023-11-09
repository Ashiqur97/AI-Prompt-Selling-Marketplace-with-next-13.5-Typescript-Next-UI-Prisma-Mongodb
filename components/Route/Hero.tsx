import React from 'react'
import Image from "next/image";
import line from "@/public/Assets/line.png";

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='w-full md:min-h-screen flex items-center justify-center'>
          <div>
        <h1 className="font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
          Make <span className="text-[#64FF4B]">Ai Image</span> <br /> With Your{" "}
          <br /> Imagination
        </h1>
        <div className="md:mt-5">
          <Image
            src={line}
            alt=""
            className="absolute hidden md:block"
            width={2000}
            height={2}
          />
        </div>
        </div>
    </div>
  )
}

export default Hero