"use client";
import { CalculateStageSize, loadImageFromFile } from "@/utils/image";
import { useCallback, useState } from "react"
import { StageSize, TextElement } from "@/types/meme";
import { text } from "stream/consumers";
export const useMemeGenerator = ()=>{

    const[image,setImage]= useState<HTMLImageElement|null>(null);
    const [stageSize,setStageSize]= useState<StageSize>({width:600,height:400})


    const [TextElement,setTextElement]=useState<TextElement[]>([]);
    const [selectedId,setSelectedId] = useState<string|null>(null);
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
    const newText: TextElement = {
        id: `text-${Date.now()}`,
        text: "MEME TEXT",
        x: stageSize.width/2,
        y: stageSize.height/2,
        fontSize: 40,
        fill:"white",
        stroke:"black",
        strokeWidth:2,
        fontFamily:"Impact,Arial Black,sans-serif",
        align:"center"
    }
    setTextElement((prev)=>[...prev,newText])
    setSelectedId(newText.id);
    },[stageSize]);
    const updateText = useCallback((id:string,newText:string)=>{
        setTextElement((prev)=>prev.map((el)=>(el.id===id?{...el,text: newText}:el)))
    },[]) 
    return {
        image,
        TextElement,
        handleImageUpload,
        stageSize,
        selectedId,
        addText,
        updateText  
    }
}