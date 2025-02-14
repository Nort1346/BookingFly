// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/bookingfly";

if (!MONGODB_URI) {
  throw new Error("Define MONGODB_URL environment variable!");
}

const cached: {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
} = { conn: null, promise: null };

/**
 * @author Nort1346
 */
async function connect(): Promise<mongoose.Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log("DB connected");
      return mongoose.connection;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export { connect };
