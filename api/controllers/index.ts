import NoteController from "./Note.controller";
import UserController from "./User.controller";

class ControllerManager {

    getNoteControllers = (): NoteController => new NoteController();
    getUserControllers = (): UserController => new UserController();

}

export default ControllerManager;
