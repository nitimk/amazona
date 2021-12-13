import express from "express";
import mongoose from "mongoose";

import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";

const app = express();
//dotenv.config({ path: MONGODB_URL });
mongoose.connect(
  "mongodb+srv://prakash07:nmpnmpnmp@cluster0.hqry7.mongodb.net/Amazona?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  }
);




app.use("/api/users", userRouter);

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
