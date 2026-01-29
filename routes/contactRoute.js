router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields ❌",
      });
    }

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
