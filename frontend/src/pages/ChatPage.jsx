import { Panel, Group, Separator } from "react-resizable-panels";
import {
  ImagesIcon,
  MessageSquareTextIcon,
  PhoneIcon,
  SettingsIcon,
} from "lucide-react";
import {
  MdCall,
  MdGroups,
  MdOutlineCall,
  MdOutlineGroups,
} from "react-icons/md";
import {
  PiChatsDuotone,
  PiChatsFill,
  PiImagesSquareThin,
} from "react-icons/pi";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";

import AppSidebar from "@/components/AppSidebar";

import { useAuthStore } from "../store/useAuthStore";
// import Chats from "../components/Chats";

function ChatPage() {
  const { logout } = useAuthStore();
  return (
    // <div className="w-full flex items-center justify-center p-4 bg-slate-900">
    <div className="relative w-full  h-[910px] mx-auto">
      <div className="bg-[#202022] h-full rounded-2xl text-slate-400 flex">
        <Group orientation="horizontal">
          {/* LEFT SIDE */}
          <div className="w-[60px] p-2 flex flex-col items-center justify-between mt-4 text-[#8d8889] ">
            {/* TOP */}
            <div className="flex flex-col items-center justify-between h-[750px]">
              <div className="flex flex-col gap-4 justify-between ">
                {/* <MessageSquareTextIcon size={20} /> */}
                {/* <PhoneIcon size={20} /> */}
                <PiChatsDuotone size={22} />
                {/* <PiChatsFill size={22} /> */}
                <MdOutlineCall size={22} />
                {/* <MdCall size={22} /> */}
                <MdOutlineGroups size={22} />
                {/* <MdGroups size={22} /> */}
              </div>
              <div className="flex flex-col ">
                {/* <ImagesIcon size={20} /> */}
                <PiImagesSquareThin size={22} />
              </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col items-center gap-6 w-full pb-5">
              <hr className="border-t border-[#8d8889]  w-full" />
              <div className="flex flex-col gap-4 items-center ">
                {/* <SettingsIcon size={20} /> */}
                <IoSettingsOutline size={22} />
                {/* <IoSettings size={22} /> */}
                <div className="avatar">
                  <div className="w-9 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE PART */}
          <Panel defaultSize={300} minSize={300} maxSize={700}>
            <div className="h-full p-4 overflow-y-auto bg-[#f9fafc] rounded-l-2xl">
              {/* <div className="w-80 h-full rounded-l-md bg-slate-300"> */}
              <Chats />
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
            {/* <Panel defaultSize={80} minSize={60}> */}
            <div className="h-full bg-base-200 p-4 overflow-auto rounded-r-2xl">
              RightSide
            </div>
          </Panel>
        </Group>
      </div>
    </div>
    // </div>
  );
}

export default ChatPage;
