import { rejects } from "assert"
import { resolve } from "path"

export const loadImageFromFile = (file:File):Promise<HTMLImageElement> =>{
    return new Promise((resolve,reject)=>{
        if(!file || (file.type!=="image/jpeg"&&file.type!=="image/png")){
            reject(new Error("Invalid file"))
            return
        }


        const reader = new FileReader();
        reader.onload = ()=>{
            const img = new Image();
            img.onload = ()=>resolve(img)
            img.onerror = reject
            img.src = reader.result as string
        }
        reader.onerror= reject
        reader.readAsDataURL(file)
    
    })
}