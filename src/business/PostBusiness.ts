import { PostDatabase } from "../database/PostDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export class PostBusiness {
    constructor (
        private postDataBase: PostDatabase,
        private IdGenerator: IdGenerator,
        private TokenManager: TokenManager
    ) {}
}