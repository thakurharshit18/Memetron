"use client";
import ExportControls from "@/components/exportControls";
import MemeCanvas from "@/components/meme-canvas";
import TextControls from "@/components/text-controls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UploadControls from "@/components/uploadControls";
import { useMemeGenerator } from "@/hooks/useMemeGenerator";


export default function Home() {
  const {image,handleImageUpload,stageSize,addText} = useMemeGenerator();
  console.log(image);
  return (
   <div className="min-h-screen bg-gray-50 p-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Meme Generator
          </h1> 
<p className="text-gray-600">
  Create Hilarious memes with custom text and images
</p>
      </div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 
  <div className=" lg:col-span-1 space-y-4">
  <UploadControls onImageUpload={handleImageUpload}/>
  <TextControls onAddText = {addText}/>
  <ExportControls/>
</div>
<div className="lg:col-span-2">
  <Card>
    <CardHeader>

      
      <CardTitle>
        Canvas
      </CardTitle>
    </CardHeader>
    <CardContent className="flex justify-center">
<MemeCanvas image={image} stageSize={stageSize} />
    </CardContent>
  </Card>
</div>
    </div>


</div>
   </div>
  );
}
