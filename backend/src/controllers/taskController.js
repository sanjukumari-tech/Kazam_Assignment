import { redis } from "../index.js";

let notes = [];

export const addNote = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });
    const note = { id: notes.length + 1, text, createdAt: new Date() };
    notes.push(note);
    //socket connection for real time update
    // const io = req.app.locals.io;
    // io.emit("new-note",note)
    if (notes.length > 0) {
      dataToRedis(notes);
    }
    res.json({ message: "Note added", notesCount: notes.length });
  } catch (error) {
    console.log(error);
    throw new error(error?.message);
  }
};

async function dataToRedis(notes) {
  if (notes.length <= 50) {
    await redis.set('FULLSTACK_TASK_SANJUKUMARI', JSON.stringify(notes));
  } else {
  }
}

export const fetchAllNotes = async (req, res) => {
  res.json({ notes });
};
