import express from "express";

import { getDateTime } from "../db";

const router = express.Router();

router.get<object, { time: string; api: string }>("/", async (req, res) => {
  const dateTime = await getDateTime();
  const response = dateTime;
  response.api = "node";
  res.send(response);
});

export default router;
