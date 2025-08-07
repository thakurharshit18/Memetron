import React from 'react'
import { Card,CardContent,CardHeader,CardTitle } from './ui/card'
import { RotateCcw, Type } from 'lucide-react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { TextElement } from '@/types/meme'


interface TextControlsProps {
  onAddText: ()=>void;
  selectedId : string|null;
  TextElement: TextElement[];
  hasImage: boolean;
  onUpdateText: (id:string,text:string)=>void,
  onDeleteText:(id:string)=>void,

}
export default function TextControls({onAddText,selectedId,TextElement,onUpdateText,hasImage,onDeleteText}:TextControlsProps) {
  console.log(selectedId);
const selectedText = TextElement.find((el)=>el.id===selectedId)
  return(   
  <>
  <Card>
  <CardHeader>
    <CardTitle className='flex items-center gap-2'>
        <Type className='w-5 h-5'/> Add Text
    </CardTitle>
  </CardHeader>
  <CardContent>
   <Button className='w-full' onClick={onAddText} disabled={!hasImage}>Add Text</Button>
  </CardContent>
</Card>

{selectedId &&
selectedText && (
 <Card>
  <CardHeader>
   <CardTitle>Edit Text</CardTitle>
  </CardHeader>
  <CardContent>
  <div className='space-y-4'>
    <div>
     <Label>Text Content</Label>
     <Input  className="mt-1"  placeholder='Enter Meme Text...'
     value={selectedText.text}
     onChange={(e)=>onUpdateText(selectedId,e.target.value)}
     
     />
  </div>

  <Button variant="destructive" className="w-full" onClick={()=>onDeleteText(selectedId)}>
    Delete Text
  </Button>
  </div>
  </CardContent>
</Card>
)}
  </>
  )
}
