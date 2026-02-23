import express from "express";
// const express = require('express');
// import {ENV} from './lib/env.js';
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
const __dirname = path.resolve();

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Recuriter backend API!" });
});
app.get("/books", (req, res) => {
  res.status(200).json({ message: "Books endpoint is working!" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(process.env.PORT, async() => {
  console.log(`Server is running on port ${process.env.PORT}`);
  await connectDB();
});
