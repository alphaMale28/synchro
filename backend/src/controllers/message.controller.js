import cloudinary from "../lib/cloudinary.js";
import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
import User from "../models/User.js";

export const getMessagesByUserId = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: userToChatId } = req.params;

    const conversation = await Conversation.findOne({
      participants: { $all: [myId, userToChatId] },
    });

    if (!conversation)
      return res.status(200).json("No conversation found of these 2 ids");

    const messages = await Messages.find({
      conversationId: conversation._id,
    }).sort({ createdAt: 1 });

    return res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage controller:", error.message);
    return res.status(500).json({ message: "Failed to get messages." });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: userToChatId } = req.params;
    const myId = req.user._id;
    // const myId = "6a3fca5c531ab2037f1f2bdb";

    if (!text && !image) {
      return res.status(400).json({ message: "Text or image is required." });
    }

    if (myId.equals(userToChatId)) {
      return res
        .status(400)
        .json({ message: "Cannot send message to yourself." });
    }

    const receiverExists = await User.exists({ _id: userToChatId });
    if (!receiverExists) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    let imageUrl;

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [myId, userToChatId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [myId, userToChatId],
      });
    }

    const newMessage = new Message({
      senderId: myId,
      conversationId: conversation._id,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    conversation.lastMessage = text || "📷 Image";
    conversation.lastMessageAt = new Date();

    await conversation.save();

    // TODO: socket.io

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in senMessage controller", error.message);
    return res.status(500).json({ message: "Failed to send Message." });
  }
};
