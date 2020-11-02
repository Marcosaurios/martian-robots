import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import explore from './routes/exploration';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(fileUpload());

app.use(express.static(`${__dirname}/static`));

app.post('/explore', explore);

app.listen(3001, () => {
  console.log('Running server on port 3001');
});
