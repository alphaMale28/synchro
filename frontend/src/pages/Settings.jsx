import { MdOutlineAddComment } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Group, Panel, Separator } from "react-resizable-panels";

function Settings() {
  return (
    <div className="relative w-full h-[880px]">
      <div className="overflow-y-auto bg-[#e2e2e2] rounded-2xl h-full">
        <Group orientation="horizontal">
          {/* LEFT SIDE */}

          <Panel defaultSize={300} minSize={300} maxSize={700}>
            <div className="h-full p-4 overflow-y-auto bg-[#f9fafc] rounded-l-2xl">
              <div className="flex items-center justify-between mx-5">
                <h1 className="text-2xl">Settings</h1>
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
            {/* <Panel defaultSize={80} minSize={60}> */}
            <div className="h-full bg-[#f9fafc] p-4 overflow-auto rounded-r-2xl">
              RightSide Settings Page
            </div>
          </Panel>
        </Group>
      </div>
    </div>
  );
}

export default Settings;
