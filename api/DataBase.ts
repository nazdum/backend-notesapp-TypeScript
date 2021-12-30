import mongoose from 'mongoose';
import dotenv from 'dotenv';

class DataBase {

    private _connectionString: string;
    private _config: {
        useNewUrlParser: boolean,
        useUnifiedTopology: boolean
    };

    constructor() {
        dotenv.config();
        this._connectionString = process.env.MONGO_DB_URI!;
        this._config = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

    }

    async startConnection() {
        try {
            const connection = await mongoose.connect(this._connectionString);
            console.log('Conectado a la base de datos');
        } catch (error : any) {
            console.log(error.message);
            process.exit(1);
        }

    }

}

export default DataBase;
