import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: ObjectId,
      ref: "Conversation",
      required: true,
    },

    senderId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },

    text: {
      type: String,
      trim: true,
      maxlength: 2000,
    },

    image: {
      type: String,
      default: "",
    },

    readBy: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

messageSchema.index({ conversationId: 1, createdAt: -1 });

messageSchema.pre("validate", function (next) {
  if (!this.text && !this.image) {
    return next(new Error("Either text or image is required"));
  }
  next();
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
