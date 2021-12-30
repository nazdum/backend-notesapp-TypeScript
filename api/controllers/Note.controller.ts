import express from 'express';

class NoteController {

    get(request: express.Request, response: express.Response) {
        response.status(200).json({message : 'Hello from NoteController'});
    }

}
export default NoteController;