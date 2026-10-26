import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/health', (req: Request, res: Response) => {
    res.send('<h1>Checking the health of my server</h1>');
});

export { app };