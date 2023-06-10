export interface PostDB {
    id: string,
    content: string,
    comments: number,
    likes: number,
    dislikes: number,
    creator_id: string,
    creator_name: string
}

export interface PostModel {
    content: string,
    comments: number,
    likes: number,
    dislikes: number,
    creator_id: string,
    creator_name: string
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private comments: number,
        private likes: number,
        private dislikes: number,
        private creator_id: string,
        private creator_name: string,
    ) { }

    public getId(): string {
        return this.id
    }

    public setId(newId: string): void {
        this.id = newId
    }

    public getContent(): string {
        return this.content
    }

    public setContent(newContent: string): void {
        this.content = newContent
    }

    public getComments(): number {
        return this.comments
    }

    public setComments(newComments: number): void {
        this.comments = newComments
    }

    public getLikes(): number {
        return this.likes
    }

    public setLikes(newLikes: number): void {
        this.likes = newLikes
    }

    public getDislikes(): number {
        return this.dislikes
    }

    public setDislikes(newDislikes: number): void {
        this.dislikes = newDislikes
    }

    public getCreatorId(): string {
        return this.creator_id
    }

    public setCreatorId(newCreatorId: string): void {
        this.creator_id = newCreatorId
    }

    public getCreatorName(): string {
        return this.creator_name
    }

    public setCreatorName(newCreatorName: string): void {
        this.creator_name = newCreatorName
    }

    public toDBModel(): PostDB {
        return {
            id: this.id,
            content: this.content,
            comments: this.comments,
            likes: this.likes,
            dislikes: this.dislikes,
            creator_id: this.creator_id,
            creator_name: this.creator_name
        }
    }

    public toBusinessModel(): PostModel {
        return {
            content: this.content,
            comments: this.comments,
            likes: this.likes,
            dislikes: this.dislikes,
            creator_id: this.creator_id,
            creator_name: this.creator_name
        }
    }
}
