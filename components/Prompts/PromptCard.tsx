import React from 'react'
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
        </div>
    </Card>
  )
}

export default PromptCard