import { Schema, models, model } from 'mongoose';

export interface INote {
    titulo: string;
    cuerpo: string;
    autor: Schema.Types.ObjectId;
}

const NoteSchema: Schema = new Schema({
    titulo: { type: String, required: true },
    cuerpo: { type: String, required: false },
    autor: { type: Schema.Types.ObjectId, required: true }
});

export default model<INote>('note', NoteSchema);