import {Injectable} from "@nestjs/common";
import {User} from "./user.entity";

@Injectable()
export class UserRepository {
    data: Map<number, User> = new Map<number, User>();

    getAll(): User[] {
        return Array.from(this.data.values());
    }

    getById(id: number): User | undefined {
        return this.data.get(id);
    }

    save(user: User): User {
        user.id = this.data.size + 1;
        this.data.set(user.id, user);
        return user;
    }

    delete(id: number): void {
        this.data.delete(id);
    }
}
