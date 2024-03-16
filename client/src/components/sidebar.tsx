import { ModeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, MessageCircleCode, Users, Video } from "lucide-react"


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex flex-col gap-4">
        <Button size="icon" variant='outline'><LayoutDashboard size={20} /></Button>
        <Button size="icon" variant='outline'><Users size={20} /></Button>
        <Button size="icon" variant='outline'><MessageCircleCode size={20} /></Button>
        <Button size="icon" variant='outline'><Video size={20} /></Button>
      </div>
      <ModeToggle />
    </aside>
  )
}

export default Sidebar