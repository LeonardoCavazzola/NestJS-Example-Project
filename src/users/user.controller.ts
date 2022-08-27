import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from "@nestjs/common";
import {UserService} from "./user.service";
import {userFromInput, UserInput, UserOutput, userWithIdFromInput} from "./user.dto";

@Controller('users')
export class UserController {

    constructor(private readonly service: UserService) {
    }

    @Get()
    @HttpCode(200)
    getAll(): UserOutput[] {
        return this.service.getAll().map(user => UserOutput.from(user));
    }

    @Get(':id')
    @HttpCode(200)
    getOneById(@Param() params: any): UserOutput | undefined {
        const user = this.service.getOneById(params.id);
        return user != undefined ? UserOutput.from(user) : undefined;
    }

    @Post()
    @HttpCode(201)
    create(@Body() input: UserInput): UserOutput {
        let user = userFromInput(input);
        user = this.service.create(user);
        return UserOutput.from(user);
    }

    @Put(':id')
    @HttpCode(200)
    define(@Param() params: any, @Body() input: UserInput): UserOutput {
        let user = userWithIdFromInput(params.id, input);
        user = this.service.define(user);
        return UserOutput.from(user);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param() params: any): void {
        this.service.delete(params.id);
    }
}
