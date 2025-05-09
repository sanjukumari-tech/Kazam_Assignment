<template>
  <div class="app-card">
    <h2>📝 Note App</h2>
    <NoteInput />
    <NoteList />
  </div>
</template>

<script setup>
import NoteInput from './components/NoteInput.vue'
import NoteList from './components/NoteList.vue'
import { useNoteStore } from './stores/noteStore.js'
//for socket 
import { onMounted } from 'vue'

const store = useNoteStore()

onMounted(() => {
  store.fetchNotes()       // fetch initial notes
 // store.setupSocketListener()  // 👈 setup socket listener
})
store.fetchNotes() // load notes on app start
</script>

<style scoped>
.app-card {
  width: 300px;
  margin: 40px auto;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
