import React from 'react'
import {Chip} from '@nextui-org/react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full relative grid md:grid-cols-2 md:py-8'>
        <div className='col-span-1 w-full md:w-[60%] md:mt-5 px-5 md:px-[unset]'>   
            <Chip className={''}>
                
            </Chip>
        </div>
    </div>
  )
}

export default About