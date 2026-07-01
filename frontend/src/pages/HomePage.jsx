import { useState } from "react";

import Chats from "./Chats";
import Calls from "./Calls";
import Groups from "./Groups";
import Profiles from "./Profiles";
import Settings from "./Settings";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

function Home() {
  const [active, setActive] = useState("chats");

  return (
    <div className="relative h-[910px] w-full">
      <div className="bg-[#202022] rounded-2xl text-[#8d8889] flex">
        {/* Sidebar */}
        <SidebarProvider>
          <AppSidebar active={active} setActive={setActive} />

          {/* Content */}
          <div className="flex-1 pt-4 pr-4">
            {active === "calls" && <Calls />}
            {active === "chats" && <Chats />}
            {active === "groups" && <Groups />}
            {active === "profiles" && <Profiles />}
            {active === "settings" && <Settings />}
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}

export default Home;
