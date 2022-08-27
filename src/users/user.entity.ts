export class User {
    id?: number;
    name: string;

    constructor(id: number | undefined, name: string) {
        this.id = id;
        this.name = name;
    }

    static fromName(name: string) {
        return new User(undefined, name);
    }
}
