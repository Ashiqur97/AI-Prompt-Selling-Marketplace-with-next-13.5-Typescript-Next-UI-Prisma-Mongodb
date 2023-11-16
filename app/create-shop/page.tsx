"use client";
import { styles } from "@/utils/styles";
import { useUser } from "@clerk/nextjs";
import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


type Props = {}

const Page = (props: Props) => {
    const {user} = useUser();
    const [loading,setLoading] = useState(false);
    const [shopData,setShopData] = useState({
        name:"",
        description:"",
        shopProductType:"",
        avater:"",
    });

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <div className="w-full h-screen flex flex-col justify-center">
        <div>
            <h1 className={`${styles.heading} text-center font-Monserrat`}>
                Start to selling with us
            </h1>
            <form className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto">
                <div className="w-full my-5">
                    <label className={`${styles.label} mb-2 block`}>
                        Shop Name
                    </label>
                    <Input 
                        isRequired
                        type="name"
                        value={shopData.name}
                        onChange={(e) => setShopData({...shopData,name:e.target.value})}
                        label="Becodemy"
                        size="sm"
                        variant="bordered"
                    />
                </div>
                <div className="w-full my-5">
                    <label className={`${styles.label} mb-2 block`}>
                        Shop Description (Max 120 letters)
                    </label>
                    <Input 
                        isRequired type="text"
                        label="lorem ipsum"
                        size="sm"
                        value={shopData.description}
                        onChange={(e) => setShopData({...shopData,description:e.target.value})}
                        variant="bordered"
                        maxLength={120}
                    />
                </div>
                <div className="w-full my-5">
            <label className={`${styles.label} mb-2 block`}>
              What you wanna sale with us?
            </label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Page