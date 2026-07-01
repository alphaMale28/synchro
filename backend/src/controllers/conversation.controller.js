import Conversation from "../models/Conversation.js";
// import User from "../models/User.js";

export const getContacts = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const conversations = await Conversation.find({
      participants: loggedInUserId,
    }).populate("participants", "-password");

    const contacts = conversations.map((conv) => {
      return conv.participants.find(
        (participant) =>
          participant._id.toString() !== loggedInUserId.toString(),
        // {!participant._id.equal(loggedInUserId),}
      );
    });

    return res.status(200).json(contacts);
    console.log(contacts);
  } catch (error) {
    console.log("Error in getContats controller:", error.message);
    return res.status(500).json({ message: "Failed to get Contacts" });
  }
};
