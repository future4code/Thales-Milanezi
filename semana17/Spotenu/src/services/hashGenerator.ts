import bcrypt from "bcryptjs"; 

export class HashGenerator{
    public async hash(text: string): Promise<string>{
        const rounds: number = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(text, salt)
        return hash
    }

    public compareHash = async (text: string, hash: string): Promise<boolean> => {
        return bcrypt.compare(text, hash)
    }
}