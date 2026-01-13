import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRouter);

app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

export default app;
