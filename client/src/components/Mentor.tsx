import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Mentor = () => {
  return (
    <>
    <Card className="w-56 text-center">
        <CardHeader>
          <Avatar className="self-center">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle className="">BroCoder</CardTitle>
          <CardDescription>Rust Dev | Works @Google</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-1 flex-wrap justify-center">
          <Badge>ReactJS</Badge>
          <Badge>Rust</Badge>
          <Badge>Go</Badge>
        </CardContent>
        <CardFooter className="grid gap-2">
          <Button variant="outline">Profile</Button>
          <Button variant='secondary'>Book</Button>
        </CardFooter>
      </Card></>
  )
}

export default Mentor