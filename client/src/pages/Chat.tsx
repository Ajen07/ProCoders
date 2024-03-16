import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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

      <div className="bg-sky-50 dark:bg-slate-900 flex flex-col flex-grow relative">
        <div className="flex relative top-0 w-full py-3 px-4 bg-white h-20 dark:bg-slate-800">
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
        <ScrollArea className="w-full px-4 py-2 h-full">
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