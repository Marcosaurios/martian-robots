import express from 'express';
import Mars from '../../mars';

/**
 * Process a map and its robots in Mars
 * @param {express.Request} req Request object
 * @param {express.Response} res object, which will be returned with the exploration result
 */
/** */
function explore(
  req: express.Request,
  res: express.Response,
): express.Response {
  if (!req.files || !req.files.file.name.endsWith('.txt')) {
    return res
      .send({ error: 'You have to submit a file in order to process it.' })
      .status(422);
  }

  const str = req.files.file.data.toString();

  const planet = new Mars(str);
  planet.startExploration();
  const out = planet.getOutput();

  return res.contentType('text/plain').send(out);
}

export default explore;
