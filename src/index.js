import express from 'express'
import bodyParser from 'body-parser'
import cConsoleLog from 'nodecoloredconsolelog'
import router from './router'

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.disable('x-powered-by');

app.use('/', router);

app.listen(port, () => {
   cConsoleLog('Magenta', `Listening on port ${port}`);
});
