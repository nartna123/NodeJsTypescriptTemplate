import express, {Express, Request, Response} from 'express';
import {PI} from "./consts";
export function startExpressServer() {
    // Create Express app
    const app: Express = express();
    const port: number = 3000;

    // Variables
    let counter: number = 0;

    // Define a route
    app.get('/', (req: Request, res: Response) => {
        res.send('Alive!');
    });

    app.get('/check', (req: Request, res: Response) => {
        res.send('Check!');
    });

    app.get('/pi', (req: Request, res: Response) => {
        res.send(`PI is approximately ${PI}`);
    });

    app.get('/hello', (req: Request, res: Response) => {
        const { firstName, lastName } = req.query;

        if (!firstName || !lastName) {
            return res.status(400).send('Both first name and last name are required.');
        }

        const greeting = `Hello ${firstName} ${lastName}`;
        res.send(greeting);
    });

    app.get('/counter', (req: Request, res: Response) => {
        res.send(`Counter is at ${counter}`);
        counter += 1;
    });

    // Start the Express server
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
