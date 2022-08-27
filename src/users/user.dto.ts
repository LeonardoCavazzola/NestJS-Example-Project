import {User} from "./user.entity";

export interface UserInput {
    name: string;
}

export class UserOutput {
    id: number;
    name: string;

    private constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    static from(user: User) {
        return new UserOutput(user.id!, user.name);
    }
}

export function userFromInput(user: UserInput): User {
    return User.fromName(user.name);
}

export function userWithIdFromInput(id: number, user: UserInput): User {
    return new User(id, user.name);
}
