import NoteController from "./Note.controller";
import UserController from "./User.controller";

class ControllerManager {

    private _noteController: NoteController;
    private _userController: UserController;

    constructor() {
        this._noteController = new NoteController();
        this._userController = new UserController();
    }

    getNoteControllers = (): NoteController => this._noteController;
    getUserControllers = (): UserController => this._userController;

}

export default ControllerManager;
