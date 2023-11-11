import React from 'react'
import {styles} from  '@/utils/styles'

type Props = {}

const Partners = (props: Props) => {
  return (
    <div className='py-10'>
            <h1 className={`${styles.heading} font-Monserrat text-center`}>
        Our Partner&apos;s
    </h1>
    <div className='w-full flex justify-center pt-3'>
        <div className='w-[50px] h-[2px] bg-[#64ff4b]' />
    </div>
    </div>

    
  )
}

export default Partners