'use client'
import React, { useEffect, useState } from "react";
import Header from '@/components/Header';
import Hero from '@/components/Route/Hero';


type Props = {}

const Page = (props: Props) => {
  const [isMounted,setIsMounted] = useState(false);
  useEffect(() => {
    if(!isMounted){
      setIsMounted(true);
    }
  },[isMounted]);

  if(!isMounted){
    return null;
  }

  return (
    <div>
      <Header activeItem={0}/>
      <Hero />
    </div>
  )
}

export default Page;

