// models/Counter.js

import mongoose from "mongoose";

// schema
const counterSchema = mongoose.Schema({
  name: { type: String, required: true },
  count: { type: Number, default: 0 },
});

// model & export
const Counter = mongoose.model("counter", counterSchema);

export { Counter };
