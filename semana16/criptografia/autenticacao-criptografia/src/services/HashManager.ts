import * as bcrypt from 'bcryptjs'


export class HashManager{
  public async hash(bananinha: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(bananinha, salt)
    return result;
  }

  public async compare(bananinha: string, hash: string): Promise<boolean>{
    return bcrypt.compare(bananinha, hash)
  }
}