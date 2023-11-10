import React from 'react'
import { styles } from "@/utils/styles";
import {Card} from '@nextui-org/react'
import Image from 'next/image'

type Props = {}

const PromptCard = (props: Props) => {
  return (
    <Card className='w-full md:w-[31%] 2xl:w-[23%] max-h-[410px] p-4 bg-[#130f23] m-3'>
        <div className='relative'>
            <Image 
                    src='https://pixner.net/aikeu/assets/images/category/fourteen.png'
                   alt=""
                   className="w-full !max-h-[200px] object-cover"
                   width={300}
                   height={300}
            />
            <div className='absolute bottom-2 left-2'>
                <div className='w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl'>
                <Image
                src="https://pixner.net/aikeu/assets/images/category/chat.png"
                width={25}
                height={25}
                alt=""
              />
              <span className={`${styles.label} pl-2 text-white`}>Chatgpt</span>
                </div>
            </div>
        </div>

        <div className='w-full flex justify-between py-2'>
            <h3 className={`${styles.label} text[18px] text-white`}>
                Animal Prompts
            </h3>
            <p className={`${styles.paragraph}`}>$25.00</p>
        </div>
    </Card>
  )
}

export default PromptCard