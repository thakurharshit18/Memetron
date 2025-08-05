import { Upload } from "lucide-react";

export default function MemeCanvas() {
  const image = null;
  if(!image){
    return(
    <div className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100"
    style={{width:600,height:400}}
    >
        <div className="text-center text-gray-500">
              <Upload className="w-12 h-12 mx-auto mb-2"/>
        </div>
  
    </div>)
  }
  
  
    return (
    <div>meme-canvas</div>
  )
}
