import express from "express";
import mongoose from "mongoose";
import dotenev from "dotenv"
const app = express();
dotenev.config();
import cors from "cors"
import { cardRoutes } from "./routes/card.js";
app.use(express.json());

app.use(cors({origin:process.env.FRONT}))

app.use("/api", cardRoutes);

async function main() {
  await mongoose.connect(
    process.env.URL
  );
  console.log("Database Connected");
  app.listen(process.env.PORT, () => {
    console.log(`server is runnign at:http://localhost:${process.env.PORT}`);
  });
}

main();
