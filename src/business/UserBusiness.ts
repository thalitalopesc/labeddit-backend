import { UserDatabase } from "../database/UserDatabase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export class UserBusiness {
    constructor (
        private userDataBase: UserDatabase,
        private IdGenerator: IdGenerator,
        private TokenManager: TokenManager,
        private HashManager: HashManager
    ) {}
}