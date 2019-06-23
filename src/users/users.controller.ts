import { Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common';
import { UsersService } from './services/users.service';
import { Users } from './interfaces/users.interface';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    getAllUsers(): Promise<Users[]> {
        return this.usersService.getAllUsers()
    }

    @Get(':id')
    getOneUser(@Param('id') id: string) {
        return this.usersService.getOneUser(id)
    }

    @Post()
    createUser() {
        return 'Creating a user'
    }

    @Put(':id')
    updateUser(@Body() user, @Param('id') id) {
        return 'Updating a user'
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'Deleting a user'

    }
}
