import fs from "node:fs";
import { Pool } from "pg";

// Prefer direct DATABASE_URL, otherwise read from file specified in DATABASE_URL_FILE
// eslint-disable-next-line node/no-process-env
const databaseUrlEnv = process.env.DATABASE_URL;
// eslint-disable-next-line node/no-process-env
const databaseUrlFile = process.env.DATABASE_URL_FILE;

if (!databaseUrlEnv && !databaseUrlFile) {
  throw new Error("Either DATABASE_URL or DATABASE_URL_FILE must be set");
}

const databaseUrl =
  databaseUrlEnv || fs.readFileSync(databaseUrlFile!, "utf8").trim();

const pool = new Pool({
  connectionString: databaseUrl,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export const getDateTime = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT NOW()");
    return res.rows[0];
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
  }
};
