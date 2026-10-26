import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/health', (req: Request, res: Response) => {
  res.send('<h1>Working on task 4: linting and formatting</h1>');
});

export { app };
