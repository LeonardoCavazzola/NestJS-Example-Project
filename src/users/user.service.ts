import {Injectable} from '@nestjs/common';
import {User} from "./user.entity";
import {UserRepository} from "./user.repository";

@Injectable()
export class UserService {

    constructor(private readonly repository: UserRepository) {
    }

    getAll(): User[] {
        return this.repository.getAll();
    }

    getOneById(id: number): User | undefined {
        return this.repository.getById(id);
    }

    create(entity: User): User {
        return this.repository.save(entity);
    }

    define(entity: User): User {
        return this.repository.save(entity);
    }

    delete(id: number): void {
        this.repository.delete(id);
    }
}
