const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Message received:", { name, email, message });

  // You can plug this into Nodemailer, Google Sheets, or a DB
  res.status(200).json({ success: true, message: "Message sent!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
