import "dotenv/config";
import { AppDataSource } from "./db";
import app from "./index";

const PORT = process.env.PORT;

const start = async () => {
  await AppDataSource.initialize();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
