import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";

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

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.use("/api/users", userRouter);

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
