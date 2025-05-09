// 📝 In-memory notes array
let notes = []
function dataToRadius(notes){
  if(notes.length<=50){
  
  }
      
    }
export const addNote = async(req, res) => {
  const { text } = req.body
  if (!text) return res.status(400).json({ error: 'Text is required' })
  const note = { id: notes.length + 1, text, createdAt: new Date() }
  notes.push(note)
  //socket connection for real time update
  // const io = req.app.locals.io;
  // io.emit("new-note",note)
  if(notes.length> 0){
    dataToRedis(notes);
  }
  
  res.json({ message: 'Note added', notesCount: notes.length })
}
export const fetchAllNotes = async (req, res) => {
  res.json({ notes })
}
