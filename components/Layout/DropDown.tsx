import React from 'react'
import { styles } from "@/utils/styles";
import {User} from '@clerk/nextjs/server'
import {Avatar, Dropdown,DropdownItem,DropdownMenu,DropdownTrigger} from '@nextui-org/react';


type Props = {
    user: User | null;
    setOpen: (open: boolean) => void;
    handleProfile: () => void;
    isSellerExist?: boolean;
  };

const DropDown = ({user,setOpen,handleProfile,isSellerExist}: Props) => {
    
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
            <DropdownItem
            onClick={() => {
                handleProfile();
                setOpen(false);
            }}>
                   <div className="flex w-full items-center">
            <Avatar
              src={user?.imageUrl}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              My Profile
            </span>
          </div>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  )
}

export default DropDown