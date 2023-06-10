export interface UserDB {
    id: string,
    name: string,
    email: string, 
    password: string
}

export interface UserModel {
    name: string,
    email: string, 
    password: string
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string, 
        private password: string
    ) {}

    public getId(): string {
        return this.id
    }

    public setId(newId: string): void {
        this.id = newId
    }

    public getName(): string {
        return this.name
    }

    public setName(newName: string): void {
        this.name = newName
    }

    public getEmail(): string {
        return this.email
    }

    public setEmail(newEmail: string): void {
        this.email = newEmail
    }

    public getPassword(): string {
        return this.email
    }

    public setPassword(newPassword: string): void {
        this.password = newPassword
    }

    public toDBModel(): UserDB {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password
        }
    }

    public toBusinessModel(): UserModel {
        return {
            name: this.name,
            email: this.email,
            password: this.password
        }
    }
}