import React from 'react'
import { Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from './ui/card'
export default function TextControls() {
  return(   <>

  <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  
  
  </>
  )
}
