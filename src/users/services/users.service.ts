import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Users } from '../interfaces/users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    // constructor(@InjectModel('User') private userModel: Model<Users>) { }
    constructor(@InjectModel('User') private userModel: Model<Users>) { }
    async getAllUsers() {
        return await this.userModel.find();
    }

    async getOneUser(id: string) {
        return await this.userModel.findById(id)
    }
}
