import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      data: newMessage,
      message: "Message Sent Successfully ✅",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error ❌",
    });
  }
});

export default router;
