"use client";
import { CalculateStageSize, loadImageFromFile } from "@/utils/image";
import { useCallback, useState } from "react"
import { StageSize } from "@/types/meme";
export const useMemeGenerator = ()=>{

    const[image,setImage]= useState<HTMLImageElement|null>(null);
    const [stageSize,setStageSize]= useState<StageSize>({width:600,height:400})
    const handleImageUpload = useCallback(async(event:React.ChangeEvent<HTMLInputElement>)=>{
       const file = event.target.files?.[0]
       if(!file)return
       try {
        const img = await loadImageFromFile(file);
        const newStageSize = CalculateStageSize(img);
        setStageSize(newStageSize);
        setImage(img)
       } catch (error) {
        console.error("error Loading image",error);
       }

    },[]

    );

    const addText = useCallback(()=>{
     console.log("Hello Harshit");
    },[]);
    return {
        image,
        handleImageUpload,
        stageSize,
        addText
    }
}