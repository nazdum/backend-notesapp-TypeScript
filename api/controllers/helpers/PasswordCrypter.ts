import bcrypt from 'bcrypt';

const encryptPassword = async (password: string): Promise<string> => {
    const salt: number = 10;
    const passwordHash: string = await bcrypt.hash(password, salt);
    return passwordHash;
}


export default encryptPassword;