import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import UserRouter from './routes/User.routes';
import NoteRouter from './routes/Note.routes';
import DataBase from './DataBase'

class Server {

    private _app: express.Application;

    constructor() {
        this._app = express();
        this.serverConfig();
    }

    getExpressApp = (): express.Application => this._app;

    private async serverConfig() {

        dotenv.config();

        this._app.set('port', process.env.PORT);

        this.middlewares();
        this.setRoutes();

        await new DataBase().startConnection();

    }

    private middlewares() {
        this._app.use(morgan('dev'));
        this._app.use(express.json());
    }

    private setRoutes(): void {

        this._app.use('/', new UserRouter().getRouter());
        this._app.use('/', new NoteRouter().getRouter());
    }

    start(): void {
        this._app.listen(
            this._app.get('port'),
            () => {
                console.log(`Api listening on port ${this._app.get('port')}`);
            }
        );
    }

}

export default Server;
