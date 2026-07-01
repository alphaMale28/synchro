import { useChatStore } from "@/store/useChatStore";
import { useEffect } from "react";

function ChatsList() {
  const getContacts = useChatStore((state) => state.getContacts);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <div>
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="ring-[#7678ed] ring-offset-base-100 w-11 rounded-full ring-2 ring-offset-3">
              <img src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp" />
            </div>
          </div>
          <p className="text-black">June Toppkin</p>
        </div>
      </div>
    </div>
  );
}

export default ChatsList;
