import express from 'express'
const router = express.Router();

import notesRoute from './routes/notes'
import searchRoute from './routes/search'
import addRoute from './routes/add'
import deleteRoute from './routes/delete'

router.use('/notes', notesRoute);
router.use('/search', searchRoute);
router.use('/add', addRoute);
router.use('/delete', deleteRoute);

export default router;
