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
        const noteController = new ControllerManager().getNoteControllers();    
        this._router.post(this._PATH, noteController.createNote);
        
    }

}

export default NoteRouter;