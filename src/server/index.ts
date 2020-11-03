import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import explore from './routes/exploration';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(fileUpload());

app.use(express.static(`${__dirname}/static`));

app.post('/explore', explore);

const server = app.listen(process.env.PORT || 8080, () => {
  // eslint-disable-next-line prefer-destructuring
  console.log('App now running on port', server.address());
});
