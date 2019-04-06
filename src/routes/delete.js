import express from 'express'
import {body, validationResult} from 'express-validator/check'
import Database from '../database'
const router = express.Router();

router.post('/', body('id').exists(), (req, res) => {
    if (!validationResult.isEmpty()) {
        return res.status(422).json({
            message: "Did not pass the ID of note to delete"
        })
    }
    Database.sendQuery(`DELETE FROM notes WHERE id=${req.body.id}`).then((result) => {
        res.json({
            status: 'success',
            message: `Deleted note with id: ${req.body.id}`,
            databaseResponse: result
        })
    })
})

export default router
