import { useAuthStore } from "@/store/useAuthStore";
import { LoaderIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoMdCopy } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdEmail, MdOutlineEdit } from "react-icons/md";
import { RiImage2Fill } from "react-icons/ri";
import { Group, Panel, Separator } from "react-resizable-panels";

function Profiles() {
  const { authUser, updateProfile, isUpdatingProfile } = useAuthStore();
  const [editName, setEditName] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState(authUser.fullName || "");

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  const handleEditName = async () => {
    const trimmedName = name.trim();

    if (!trimmedName || trimmedName === authUser.fullName) {
      setEditName(false);
      return;
    }

    await updateProfile({ fullName: trimmedName });

    setEditName(false);
  };
  return (
    <div className="relative w-full h-[880px]">
      <div className="overflow-y-auto bg-[#e2e2e2] rounded-2xl h-full text-black">
        {isUpdatingProfile ? (
          <div className="flex h-[870px] items-center justify-center">
            <LoaderIcon className="size-6 animate-spin mx-auto " />
          </div>
        ) : (
          <Group orientation="horizontal">
            {/* LEFT SIDE */}

            <Panel defaultSize={300} minSize={300} maxSize={700}>
              <div className="flex flex-col gap-6 h-full p-4 overflow-y-auto bg-[#f9fafc] rounded-l-2xl">
                <div className="flex items-center justify-between mx-5">
                  <h1 className="text-2xl">Profile</h1>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <div className="avatar">
                    <button
                      className="size-34 rounded-full overflow-hidden relative group cursor-pointer"
                      onClick={() => fileInputRef.current.click()}
                    >
                      <img
                        src={
                          selectedImg || authUser.profilePic || "/avatar.png"
                        }
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
                        <span className="text-white text-xs flex flex-col items-center justify-center">
                          <RiImage2Fill size={20} />
                          change <br />
                          profile <br />
                          picture
                        </span>
                      </div>
                    </button>

                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>
                <div className="flex flex-col p-6 gap-14">
                  <div className="flex flex-col gap-2 ">
                    <h2>Name</h2>
                    {editName ? (
                      <div className="relative w-full">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#f9fafc] border-0 border-b-2 border-gray-400 rounded-none focus:outline-none focus:ring-0 focus:border-[#7678ed] pr-10"
                        />

                        <button
                          className="absolute right-2 bottom-0 cursor-pointer p-2 rounded-2xl"
                          type="submit"
                          onClick={handleEditName}
                        >
                          <IoCheckmarkOutline size={20} className="mt-1" />
                        </button>
                      </div>
                    ) : (
                      <div className="relative w-full">
                        <h1>{authUser.fullName}</h1>
                        <button
                          className="absolute right-2 bottom-0 cursor-pointer hover:bg-gray-300/20 p-2 rounded-2xl"
                          type="button"
                          onClick={() => setEditName(true)}
                        >
                          <MdOutlineEdit size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2>Email</h2>
                    <div className="flex gap-2 items-center">
                      <MdEmail />
                      <p>manandhar@gmail.com</p>
                      {/* <button className="cursor-pointer hover:bg-gray-300/20 p-2 rounded-2xl">
                      <IoMdCopy size={20} />
                    </button> */}
                    </div>
                  </div>
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
              <div className="flex items-center justify-center h-full bg-[#f9fafc] p-4 overflow-auto rounded-r-2xl">
                <div className="flex flex-col items-center gap-3">
                  <img className="w-24 rounded-full" src="/avatar.png" alt="" />
                  <h1 className="text-3xl">Profile</h1>
                </div>
              </div>
            </Panel>
          </Group>
        )}
      </div>
    </div>
  );
}

export default Profiles;
