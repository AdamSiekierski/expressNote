import express from 'express'
const router = express.Router();

import notesRoute from './routes/notes'
import searchRoute from './routes/search'
import addRoute from './routes/add'

router.use('/notes', notesRoute);
router.use('/search', searchRoute);
router.use('/add', addRoute);

export default router;
