import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

// Load environment variables
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 3000;

// Connect to MongoDB, then start the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
