import mysql from 'promise-mysql'
import databaseCredits from './assets/databaseCredits'

const Database = {
    async sendQuery(query, stringify = Boolean) {
        let queryResults;

        await mysql.createConnection(databaseCredits)
        .then(async (conn) => {
            let result = await conn.query(query);

            conn.end();

            if (stringify) queryResults = JSON.stringify(result);
            else queryResults = result;
        })
        .catch((error) => {
            throw error;
        });

        return queryResults;
    }
};

export default Database;
