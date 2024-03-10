import express, {Request, Response} from 'express';
import {PI} from "./consts";
export function startExpressServer() {
    // Create Express app
    const app = express();
    const port = 3000;

    // Define a route
    app.get('/', (req: Request, res: Response) => {
        res.send('Hello World!');
    });

    app.get('/pi', (req: Request, res: Response) => {
        res.send(`PI is approximately ${PI}`);
    });

    // Start the Express server
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
