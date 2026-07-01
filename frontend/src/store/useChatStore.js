import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useChatStore = create((set, get) => ({
  Contacts: [],
  chats: [],
  messages: [],
  activeTab: "all",
  selectedUser: null,
  isUserLoading: false,
  isMessagesLoading: false,

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedUser: (selectedUser) => set({ selectedUser }),

  getContacts: async () => {
    set({ isUserLoading: true });

    try {
      const res = await axiosInstance.get("/conversations/contacts");

      set({ Contacts: res.data });

      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      set({ isUserLoading: false });
    }
  },
}));
