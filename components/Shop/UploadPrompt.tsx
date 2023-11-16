import React,{useState} from 'react'
import {styles} from "@/utils/styles"
import { useAuth } from "@clerk/nextjs";
import {
    Button,
    Input,
    Select,
    SelectItem,
    Selection,
    Textarea,
  } from "@nextui-org/react";

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

    const [dragging, setDragging] = useState<Boolean>(false);
    const { userId } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState<Selection>(new Set([]));

  return (
    <div>
        <h1 className={`${styles.heading} text-center py-5`}>
            Upload Your Prompt
        </h1>
    </div>
  )
}

export default UploadPrompt