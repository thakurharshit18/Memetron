import { Button } from "./ui/button"
import { Download } from "lucide-react"
import { Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "./ui/card"

export default function ExportControls() {
  return (
   <Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
        <Download className="w-5 h-5"/>
        Export
    </CardTitle>
  </CardHeader>
  <CardContent>
    <Button className="w-full">
        Download PNG
    </Button>
  </CardContent>
  
</Card>
  )
}
