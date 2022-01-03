import { Schema, model } from 'mongoose'

export interface IUser {
    username: string;
    passwordHash: string;
    notes: [];

}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    passwordHash: { type: String, required: true },
    notes: [{ type: Schema.Types.ObjectId, required: true }]
});

export default model<IUser>('user', UserSchema);


