import express from "express";

class UserController {

    get = (request: express.Request, response: express.Response) => {
        response.status(200).json({ message: 'Hello from user controller!' });
    }

}

export default UserController;