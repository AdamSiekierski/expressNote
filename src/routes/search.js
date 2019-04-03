import express from 'express'
import Database from '../database'
import { whitelistQuery, createSqlParams } from '../assets/helperFunctions'
const router = express.Router();

router.get('/',(req, res) => {
    let whitelistedQuery = whitelistQuery(req.query);

    if (whitelistedQuery.length === 0 || whitelistedQuery.includes('')) { // Check if any search arguments passed
        res.status(400).json({
            message: `Invalid request`
        });
        return
    }

    Database.sendQuery(`SELECT * FROM notes WHERE ${createSqlParams(whitelistedQuery)}`, true).then((response) => {
        if (response === '[]') {
            res.status(200).send({
                message: `Didn't find any note at given search parameters`
            })
        } else {
            res.json(JSON.parse(response));
        }
    }).catch((error) => {
        res.status(422).json({
            error: `Invalid request. ${error}`
        });
        throw error;
    })
});

export default router;
