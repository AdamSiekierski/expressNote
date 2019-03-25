import express from 'express'
import Database from '../database'
import noteRoute from './note'
const router = express.Router();

router.get('/', (req, res) => {
    Database.sendQuery('SELECT * FROM notes', true).then((results) => {
        console.log(results);
        res.json(JSON.parse(results));
    });
});

router.use('/', noteRoute);

export default router;
