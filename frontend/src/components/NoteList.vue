<template>
  <div class="note-list">
    <h3>Notes</h3>
    <div class="notes-container">
      <div v-for="note in store.notes" :key="note.id" class="note-item">
        {{ note.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from '../stores/noteStore'

const store = useNoteStore()
console.log("store",store);
</script>

<style scoped>
.note-list {
  margin-top: 12px;
}
.notes-container {
  border: 1px solid #ddd;
  height: 150px;
  overflow-y: auto;
}
.note-item {
  padding: 6px 8px;
  border-bottom: 1px solid #eee;
}
.note-item:last-child {
  border-bottom: none;
}
</style>
