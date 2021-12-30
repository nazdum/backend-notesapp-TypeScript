import express from 'express';
import ControllerManager from '../controllers/';

class NoteRouter {

    private _router: express.Router;
    private _PATH: string;

    constructor() {

        this._PATH = '/note'
        this._router = express.Router();
        this.setHttpMethods();
    }

    getRouter = (): express.Router => this._router;

    private setHttpMethods(): void {

        this._router.get(this._PATH, new ControllerManager().getNoteControllers().get);
    }

}

export default NoteRouter;