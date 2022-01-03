import express from "express";
import User from "../models/User.models"
import encryptPassword from "./helpers/PasswordCrypter";

class UserController {


    createUser = async (request: express.Request, response: express.Response) => {

        const { username, password } = request.body;

        if (!username || !password) {
            return response.status(400).json({ message: 'missing username or password' });
        }

        const user = new User({username, passwordHash:password});

        await user.save();


    }

}

export default UserController;