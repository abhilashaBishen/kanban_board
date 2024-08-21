const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['to-do', 'in progress', 'done'],
    default: 'to-do',
  },
  dueDate: {
    type: Date,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt

// Create a Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
