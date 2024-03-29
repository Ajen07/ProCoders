import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, SendHorizonal } from "lucide-react"

const Chat = () => {
  return (
    <div className="flex h-screen">
      <div className="py-3 px-2 border-r-2 min-w-fit">
        <form className="flex gap-2 mb-3">
          <Input placeholder="Search for a chat" />
          <Button size='icon' className="p-2"><Search size={20} /></Button>
        </form>
        <hr />
        <div>
          <div className="flex py-4 border-b-2 gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>
              Bro Code
              <small className="block text-slate-300">@brocoder</small>
            </p>

          </div>
          <div className="flex py-4 border-b-2 gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>
              Bro Code
              <small className="block text-slate-300">@brocoder</small>
            </p>

          </div>
          <div className="flex py-4 border-b-2 gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>
              Bro Code
              <small className="block text-slate-300">@brocoder</small>
            </p>

          </div>
        </div>
      </div>

      <div className="bg-sky-50 dark:bg-slate-900 flex flex-col flex-grow">
        <div className="flex top-0 w-full py-3 px-4 bg-white h-18 dark:bg-slate-800 border-b-2">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>
              Bro Code
              <small className="block text-slate-300">@brocoder</small>
            </p>

          </div>
        </div>
        <ScrollArea className="w-full px-4 py-2 h-full flex justify-center">
          {/* message from the other user */}
          <Card className="w-fit max-w-lg my-1">
            <CardContent className="py-2">
              Hey how can I help you today?
            <small className="block">{(new Date()).toLocaleTimeString()}</small>
            </CardContent>
          </Card>

          {/* message from us */}
          <Card className="w-fit max-w-lg my-1 bg-blue-500 text-white dark:bg-slate-700 ml-auto">
            <CardContent className="py-2">
              Hey I've a trouble in setting up my account.
            <small className="block">{(new Date()).toLocaleTimeString()}</small>
            </CardContent>
          </Card>

          <Card className="w-fit max-w-lg my-1">
            <CardContent className="py-2">
              What seems to be the problem?
            <small className="block">{(new Date()).toLocaleTimeString()}</small>
            </CardContent>
          </Card>
          <Card className="w-fit max-w-lg my-1">
            <CardContent className="py-2">
              Send me the picture
            <small className="block">{(new Date()).toLocaleTimeString()}</small>
            </CardContent>
          </Card>
        </ScrollArea>

        <form className="flex gap-2 bottom-0 px-2 pb-6">
          <Input placeholder="Message @procode" className="w-full" />
          <Button size='icon' className="p-2"><SendHorizonal size={18} /></Button>
        </form>
      </div>
    </div>
  )
}

export default Chat