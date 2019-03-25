import express from 'express'
import { param, validationResult } from 'express-validator/check'
import Database from '../database'
const router = express.Router();

router.get('/:id', param('id').isInt(),(req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(422).json({
            error: 'Invalid id of note'
        });
    }
    Database.sendQuery(`SELECT * FROM notes WHERE id = ${req.params.id}`, true).then((response) => {
        if (response === '[]') {
            res.status(404).send({
                message: `Didn't find any note with id: ${req.params.id}`
            })
        } else {
            res.json(JSON.parse(response));
        }
    })
});

export default router;

