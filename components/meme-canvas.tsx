import { Upload } from "lucide-react";
import { Layer, Stage,Image as KonvaImage } from "react-konva";



interface MemeCanvasProps{
    image:HTMLImageElement|null
}
export default function MemeCanvas({image}:MemeCanvasProps) {
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
    <div className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden"  style={{width:600,height:400}}>
<Stage width={window.innerWidth} height={window.innerHeight}>
  <Layer>

<KonvaImage image={image} width={600} height={400}>

</KonvaImage>

  </Layer>
</Stage>



    </div>
  )
}
