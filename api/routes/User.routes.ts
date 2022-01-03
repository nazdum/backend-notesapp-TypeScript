import express from 'express';
import ControllerManager from '../controllers/'

class UserRouter {

    private _router: express.Router;
    private _PATH: string;

    constructor() {

        this._PATH = '/user';

        this._router = express.Router();
        this.setHttpMethods();
    }

    getRouter = (): express.Router => this._router;

    private setHttpMethods(): void {

        const userController = new ControllerManager().getUserControllers();
        this._router.post(this._PATH, userController.createUser);
    }


}

export default UserRouter;