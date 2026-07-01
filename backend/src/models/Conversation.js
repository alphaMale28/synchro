import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const ConversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: ObjectId,
        ref: "User",
        required: true,
      },
    ],

    isGroup: {
      type: Boolean,
      default: false,
    },

    groupName: {
      type: String,
      trim: true,
      default: "",
    },

    groupAvatar: {
      type: String,
      default: "",
    },

    admin: {
      type: ObjectId,
      ref: "User",
    },

    lastMessage: {
      type: ObjectId,
      ref: "Message",
    },

    lastMessageAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

ConversationSchema.index({ participants: 1 });

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
