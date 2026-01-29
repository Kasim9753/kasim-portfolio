import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// POST Contact Form API
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields ❌",
      });
    }

    // Save Message in MongoDB
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully ✅",
      data: newMessage,
    });
  } catch (error) {
    console.log("Contact API Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error ❌",
    });
  }
});

export default router;

