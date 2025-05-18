const repl = require("repl");
const mongoose = require("mongoose");
const mysql = require("mysql2/promise");
const { createClient } = require("redis");

const start = async () => {
  console.log("Connecting to MongoDB, MySQL, and Redis...");

  // MongoDB
  const mongoConn = await mongoose.connect("mongodb://mongo:27017/testdb");
  console.log("✅ MongoDB connected");

  // MySQL
  const mysqlConn = await mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root",
    database: "testdb",
  });
  console.log("✅ MySQL connected");

  // Redis
  const redisClient = createClient({ url: "redis://redis:6379" });
  await redisClient.connect();
  console.log("✅ Redis connected");

  // Start REPL
  const r = repl.start("🔍 tinker > ");

  // Make connections available in REPL
  r.context.mongo = mongoConn;
  r.context.mysql = mysqlConn;
  r.context.redis = redisClient;
};

start();
