"use client";
import { useCallback, useState } from "react"

export const useMemeGenerator = ()=>{

    const[image,setImage]= useState<HTMLImageElement|null>(null);
    const handleImageUpload = useCallback(async(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.files);

    },[]

    );
    return {
        image,
        handleImageUpload
    }
}