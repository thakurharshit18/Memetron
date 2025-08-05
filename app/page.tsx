import ExportControls from "@/components/exportControls";
import TextControls from "@/components/text-controls";
import UploadControls from "@/components/uploadControls";


export default function Home() {
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
  <UploadControls/>
  <TextControls/>
  <ExportControls/>
</div>
<div className="bg-blue-500 lg:col-span-2"></div>
    </div>


</div>
   </div>
  );
}
