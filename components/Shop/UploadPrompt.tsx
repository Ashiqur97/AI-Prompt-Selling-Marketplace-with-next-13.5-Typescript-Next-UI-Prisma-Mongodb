import React,{useState} from 'react'
import {styles} from "@/utils/styles"


type Props = {}

type PromptData = {
    name: string;
    shortDescription: string;
    description: string;
    images: string[];
    attachments: string[];
    estimatedPrice: string;
    price: string;
    tags: string;
  };
  
  const categorieItem = [
    {
      title: "Chatgpt",
    },
    {
      title: "Midjourney",
    },
    {
      title: "Bard",
    },
    {
      title: "Dalle",
    },
  ];

const UploadPrompt = (props: Props) => {
    const [promptData,setPromptData] = useState({
        name: "",
        shortDescription: "",
        description: "",
        images: [],
        attachments: [],
        estimatedPrice: "",
        price: "",
        tags: "",
    });
    
  return (
    <div>
        <h1 className={`${styles.heading} text-center py-5`}>
            Upload Your Prompt
        </h1>
    </div>
  )
}

export default UploadPrompt