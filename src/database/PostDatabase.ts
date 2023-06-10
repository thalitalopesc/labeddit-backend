import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"
    public static TABLE_LIKES_DISLIKES = "likes_dislikes"
    public static TABLE_COMMENTS = "comments"
}