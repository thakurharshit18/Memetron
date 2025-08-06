import { TextElement } from "@/types/meme";
import { Text } from "react-konva";

interface DraggableTextProps {
  textProps: TextElement;
  isSelected:boolean;
  onSelect:()=>void,
  onChange:(newAttrs:Partial<TextElement>)=>void;
}
export default function DraggableText({
  textProps,
  isSelected,
  onSelect,
  onChange
}: DraggableTextProps) {
  return (
    <>
      <Text
        draggable
        {...textProps} 
      />
    </>
  );
}