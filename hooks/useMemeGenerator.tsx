"use client";
import { loadImageFromFile } from "@/utils/image";
import { useCallback, useState } from "react"

export const useMemeGenerator = ()=>{

    const[image,setImage]= useState<HTMLImageElement|null>(null);
    const handleImageUpload = useCallback(async(event:React.ChangeEvent<HTMLInputElement>)=>{
       const file = event.target.files?.[0]
       if(!file)return
       try {
        const img = await loadImageFromFile(file);
        setImage(img)

       } catch (error) {
        
       }

    },[]

    );
    return {
        image,
        handleImageUpload
    }
}