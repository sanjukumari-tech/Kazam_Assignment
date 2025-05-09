import { defineStore } from 'pinia'
import axios from 'axios'


export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: [],
     socketInitialized: false // to avoid duplicate listeners
  }),
  actions: {
    async fetchNotes() {
      try {
        const res = await axios.get('/api/notes')
        console.log(res);
        this.notes = res.data.notes
        // console.log(this.notes[0]);
      } catch (err) {
        console.error('Fetch error:', err)
      }
    },
    async addNote(noteText) {
      try {
        const res = await axios.post('/api/notes', { text: noteText })
        // console.log("addres",res);
        // this.fetchNotes() // refresh notes after adding
      } catch (err) {
        console.error('Add error:', err)
      }
    },
      setupSocketListener() {
      if (this.socketInitialized) return  // avoid duplicate listeners

      socket.on('new-note', (note) => {
        console.log('Received new note via socket:', note)
        this.notes.push(note)
      })

      this.socketInitialized = true
    }
  }
})
