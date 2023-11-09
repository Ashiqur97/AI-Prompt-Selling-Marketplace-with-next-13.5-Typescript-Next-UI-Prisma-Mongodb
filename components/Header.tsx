import React,{useState} from 'react'

type Props = {}

const Header = (props: Props) => {
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
            
        </div>
    </div>
  )
}

export default Header