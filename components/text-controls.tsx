import React from 'react'
import { Card,CardContent,CardHeader,CardTitle } from './ui/card'
import { RotateCcw, Type } from 'lucide-react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
export default function TextControls() {
  return(   <>
  <Card>
  <CardHeader>
    <CardTitle className='flex items-center gap-2'>
        <Type className='w-5 h-5'/>
    </CardTitle>
  </CardHeader>
  <CardContent>
   <Button className='w-full'>Add Text</Button>
  </CardContent>
</Card>
  <Card>
  <CardHeader>
   <CardTitle>Edit Text</CardTitle>
  </CardHeader>
  <CardContent>
  <div className='space-y-4'>
    <div>
     <Label>Text Content</Label>
     <Input  className="mt-1"  placeholder='Enter Meme Text...'/>
  </div>

  <Button variant="destructive" className="w-full">
    Delete Text
  </Button>
  </div>
  </CardContent>
</Card>
  </>
  )
}
