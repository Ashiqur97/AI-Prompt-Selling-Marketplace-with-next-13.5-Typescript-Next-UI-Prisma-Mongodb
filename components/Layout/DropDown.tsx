import React from 'react'
import {User} from '@clerk/nextjs/server'
import {Avatar, Dropdown,DropdownMenu,DropdownTrigger} from '@nextui-org/react';


type Props = {
    user:User | null;
    sertOpen:(open:boolean) => void;
    handleProfile: () => void;
    isSellerExist: boolean;
}

const DropDown = (props: Props) => {
    user,setOpen,handleProfile,isSellerExist
  return (
    <Dropdown placeholder='bottom-start'>
        <DropdownTrigger>
            <Avatar 
                src={user?.imageUrl}
                alt=""
                className='w-[40px] h-[40px] cursor-pointer'
            />
        </DropdownTrigger>
        <DropdownMenu aria-label='Profile Actions' variant='flat'>
            
        </DropdownMenu>
    </Dropdown>
  )
}

export default DropDown