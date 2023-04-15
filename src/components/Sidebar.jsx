import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
        <SidebarRow Icon = {UserIcon} title = "friends" />
        <SidebarRow Icon = {UserGroupIcon} title = "Groups" />
        <SidebarRow Icon = {ChevronDoubleDownIcon} title = "See more" />
        
    </div>
  )
}

export default Sidebar;
