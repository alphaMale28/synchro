import {
  PiChatsDuotone,
  PiChatsFill,
  PiImagesSquareThin,
} from "react-icons/pi";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  MdCall,
  MdGroups,
  MdOutlineCall,
  MdOutlineGroups,
} from "react-icons/md";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { BiLogoStripe } from "react-icons/bi";
import { useAuthStore } from "@/store/useAuthStore";

function AppSidebar({ active, setActive }) {
  const { authUser } = useAuthStore();

  const topMenus = [
    {
      id: "chats",
      activeIcon: PiChatsFill,
      inactiveIcon: PiChatsDuotone,
    },
    {
      id: "calls",
      activeIcon: MdCall,
      inactiveIcon: MdOutlineCall,
    },
    {
      id: "groups",
      activeIcon: MdGroups,
      inactiveIcon: MdOutlineGroups,
    },
  ];

  const bottomMenus = [
    {
      id: "settings",
      activeIcon: IoSettings,
      inactiveIcon: IoSettingsOutline,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader
        className={"flex items-center justify-center gap-2 mt-4 mb-10"}
      >
        <BiLogoStripe />
        {/* <hr className="border-t border-[#8d8889]  w-10" /> */}
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col items-center justify-between h-[750px]">
          <div className="flex flex-col gap-4 justify-between ">
            {topMenus.map((menu) => {
              const Icon =
                active === menu.id ? menu.activeIcon : menu.inactiveIcon;
              return (
                <SidebarMenu key={menu.id}>
                  <SidebarMenuButton
                    isActive={active === menu.id}
                    onClick={() => setActive(menu.id)}
                  >
                    <Icon
                      className={`${active === menu.id ? "text-white" : "text-[#8d8889]"}`}
                    />
                  </SidebarMenuButton>
                </SidebarMenu>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <SidebarMenu>
              <SidebarMenuButton>
                <PiImagesSquareThin size={22} />
              </SidebarMenuButton>
            </SidebarMenu>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col gap-4 items-center justify-between">
          <hr className="border-t border-[#8d8889]  w-10" />
          <div className="flex flex-col gap-4 justify-between ">
            {bottomMenus.map((menu) => {
              const Icon =
                active === menu.id ? menu.activeIcon : menu.inactiveIcon;

              return (
                <SidebarMenu key={menu.id}>
                  <SidebarMenuButton
                    isActive={active === menu.id}
                    onClick={() => setActive(menu.id)}
                  >
                    <Icon
                      className={`${active === menu.id ? "text-white" : "text-[#8d8889]"}`}
                    />
                  </SidebarMenuButton>
                </SidebarMenu>
              );
            })}
          </div>
          <SidebarMenu className="flex items-center">
            <SidebarMenuButton
              className="justify-center  size-11"
              isActive={active === "profiles"}
              onClick={() => setActive("profiles")}
            >
              <div className="avatar">
                <div className="rounded-full ">
                  <img
                    // src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp"
                    src={authUser.profilePic || "/avatar.png"}
                  />
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
