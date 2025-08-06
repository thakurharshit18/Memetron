import { StageSize, TextElement } from "@/types/meme";
import { Upload } from "lucide-react";
import { Layer, Stage, Image as KonvaImage } from "react-konva";

import Konva from "konva";
import DraggableText from "./dragabletext";

interface MemeCanvasProps {
  image: HTMLImageElement | null;
  textElements: TextElement[];
  stageSize: StageSize;
 selectedId : string|null
}
export default function MemeCanvas({
  image,
  textElements,
  stageSize,
  selectedId
  
}: MemeCanvasProps) {
  if (!image) {
    return (
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100"
        style={{ width: stageSize.width, height: stageSize.height }}
      >
        <div className="text-center text-gray-500">
          <Upload className="w-12 h-12 mx-auto mb-2" />
          <p>Upload an image to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden"
      style={{ width: stageSize.width, height: stageSize.height }}
    >
      <Stage width={stageSize.width} height={stageSize.height} >
        <Layer>
          <KonvaImage
            image={image}
            width={stageSize.width}
            height={stageSize.height}
          />
          {textElements.map((textEl) => (
            <DraggableText
              key={textEl.id}
              textProps={textEl}
              
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}