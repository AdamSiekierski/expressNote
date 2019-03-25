import express from 'express'
import { body, validationResult } from 'express-validator/check'
import Database from '../database'
const router = express.Router();

router.post('/', [body('title').exists(), body('content').exists()], (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(422).json({
            message: 'Invalid arguments passed'
        });
    }
    Database.sendQuery(`SELECT id FROM notes ORDER BY id DESC LIMIT 1`, false).then((result) => {
        let highestId = result[0].id;
        Database.sendQuery(`INSERT INTO notes (id, title, content) VALUES (${highestId + 1}, '${req.body.title}', '${req.body.content}')`).then((result) => {
            res.status(201).json({
                status: 'success',
                message: 'Successfully added new note to database',
                databaseResponse: result
            })
        }).catch((error) => {
            console.log(error);
        });
    })
});

export default router;
