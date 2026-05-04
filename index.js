require('dotenv').config();
const express = require("express");

console.log("generate token secretKey : ", process.env.ACCESS_TOKEN_SECRET);