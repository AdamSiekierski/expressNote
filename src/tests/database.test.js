import sendQuery from '../database'

sendQuery(`INSERT INTO notes (Id, title, note) VALUES (2, 'oh nice', 'i like it') `)
