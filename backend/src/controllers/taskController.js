import { redis } from "../index.js";
import { Note } from "../models/Task.js";

const notes = [];
async function dataToRedis(notes) {
  if (notes.length <= 50) {
    await redis.set('FULLSTACK_TASK_SANJUKUMARI', JSON.stringify(notes));
  } else {
    console.log("📦 Saving notes to MongoDB...");
    try {
      await Note.insertMany(notes);
      console.log("✅ Notes saved to MongoDB");

   
    } catch (err) {
      console.error("❌ Error saving to MongoDB:", err);
    }
  }
}


export const add = async (req, res) => {
  try {
    const { text } = req.body;
  
    if (!text) return res.status(400).json({ error: "Text is required" });
    const note = { id: notes.length + 1, text, createdAt: new Date() };
    notes.push(note);
    //socket connection for real time update
    // const io = req.app.locals.io;
    // io.emit("new-note",note)
    if (notes.length > 0) {
     await dataToRedis(notes);
    }
    res.json({ message: "Note added", notesCount: notes.length });
  } catch (error) {
    console.log(error.message);
    throw new Error(error?.message);
    // console.log(error.message)

  }
};


export const fetchAllNotes = async (req, res) => {
  res.json({ notes });
};
