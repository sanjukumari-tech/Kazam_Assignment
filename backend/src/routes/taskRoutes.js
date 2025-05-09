import { Router } from 'express'
import { addNote, fetchAllNotes } from '../controllers/taskController.js'


const router = Router()

router.post('/notes', addNote)
router.get('/notes', fetchAllNotes)

export default router
