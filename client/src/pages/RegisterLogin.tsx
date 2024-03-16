import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AiOutlineGithub } from "react-icons/ai"

const RegisterLogin = () => {
  return (
    <div className="container my-20 text-center max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Don't Have an Account Yet?<Button variant='link' className="-ml-3">Sign Up</Button></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="gap-3 flex flex-col">
            <form className="flex flex-col gap-3">
              <Input id="username" placeholder="Username" type="text" />
              <Input id="email" placeholder="Email" type="email" />
              <Input id="Password" placeholder="Password" type="password"/>
              <Button>Sign In</Button>
            </form>
            <hr />
            <Button variant='secondary'><AiOutlineGithub size={30} className="inline mr-3"/>Sign In with GitHub</Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}

export default RegisterLogin