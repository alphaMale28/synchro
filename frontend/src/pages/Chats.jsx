import { MdOutlineAddComment } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Group, Panel, Separator } from "react-resizable-panels";
import ActiveTabSwitch from "@/components/ActiveTabSwitch";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ChatsList from "@/components/ChatsList";
import { useChatStore } from "@/store/useChatStore";
import UnreadList from "@/components/UnreadList";
import FavouritesList from "@/components/FavouritesList";
import GroupsList from "@/components/GroupsList";

function Chats() {
  const [panelSize, setPanelSize] = useState(300);

  const activeTab = useChatStore((state) => state.activeTab);

  return (
    <div className="relative w-full h-[880px]">
      <div className="overflow-y-auto bg-[#e2e2e2] rounded-2xl h-full">
        <Group orientation="horizontal">
          {/* LEFT SIDE */}

          <Panel
            defaultSize={300}
            minSize={300}
            maxSize={700}
            onResize={setPanelSize}
          >
            {/* <Panel
            defaultSize="15%"
            minSize="15%"
            maxSize="45%"
            onResize={setPanelSize}
          > */}
            <div className="h-full p-4 overflow-y-auto bg-[#f9fafc] rounded-l-2xl fl4ex flex-col gap-2">
              <div className="flex items-center justify-between mx-5">
                <h1 className="text-2xl">Chats</h1>
                <div className="flex gap-5">
                  <MdOutlineAddComment size={24} />
                  <HiOutlineDotsVertical size={24} />
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl p-2 mt-5 bg-[#ece8e8]">
                <IoSearchOutline className="ml-2" />
                Search
              </div>

              <div className="flex">
                <ActiveTabSwitch size={panelSize} />
              </div>

              <div className="flex">
                {activeTab === "all" ? (
                  <ChatsList />
                ) : activeTab === "unread" ? (
                  <UnreadList />
                ) : activeTab === "favourites" ? (
                  <FavouritesList />
                ) : (
                  <GroupsList />
                )}
              </div>
            </div>
          </Panel>

          {/* <Separator className="w-2  hover:bg-slate-300/30 transition-colors cursor-col-resize" /> */}
          <Separator className="relative w-0.5 h-full cursor-col-resize z-10 group outline-none">
            {/* This inner div acts as the visual line that overlaps the right edge of the left panel */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-base-200/10 group-hover:bg-slate-300 group-hover:w-1 transition-all duration-150" />
          </Separator>
          {/* <Separator className="w-0.5 bg-transparent hover:bg-slate-300 hover:w-2 transition-colors cursor-col-resize" /> */}

          {/* RIGHT SIDE */}
          <Panel>
            {/* <Panel defaultSize={80} minSize={55}> */}
            <div className="h-full bg-[#f9fafc] p-4 overflow-auto rounded-r-2xl">
              RightSide Chats Page
            </div>
          </Panel>
        </Group>
      </div>
    </div>
  );
}

export default Chats;
