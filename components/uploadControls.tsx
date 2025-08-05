import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {RotateCcw, Upload} from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
export default function UploadControls() {
  return (
  <Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
    <Upload className="w-5 h-5"/>
    Upload Image
    </CardTitle>
  </CardHeader>
  <CardContent>
  <div>
     <Label>Choose Image(JPG/PNG)</Label>
     <Input className="mt-1" type="file" accept="image.jpeg,image/png"/>
  </div>
  <Button variant="outline" className="w-full bg-transparent">
  <RotateCcw className="w-4 h-4 mr-2"/>
    Reset Canvas
  </Button>
  </CardContent>
  
</Card>
  )
}
