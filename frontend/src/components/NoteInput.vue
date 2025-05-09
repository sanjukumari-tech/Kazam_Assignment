<template>
  <div class="input-container">
    <input v-model="newNote" placeholder="New Note..." />
    <button @click="handleAdd">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/noteStore'

const newNote = ref('')
const store = useNoteStore()

function handleAdd() {
console.log("ff",newNote.value);
  if (newNote.value.trim()) {
    store.addNote(newNote.value)
    newNote.value = ''
  }
  console.log("hello");
}
</script>

<style scoped>
.input-container {
  display: flex;
  gap: 8px;
}
input {
  flex: 1;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background: #964B00;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
}
</style>
