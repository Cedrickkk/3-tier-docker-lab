import express from "express";
import { getDateTime } from "../db";

const router = express.Router();

router.get<object, { time: string; api: string }>("/", async (req, res) => {
  res.json({
    time: await getDateTime(),
    api: "Node",
  });
});

export default router;
