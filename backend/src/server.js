import express from 'express';
// const express = require('express');
// import {ENV} from './lib/env.js';
 import dotenv from 'dotenv';
const app = express();

app.use(express.json());
 dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Recuriter backend API!' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});



