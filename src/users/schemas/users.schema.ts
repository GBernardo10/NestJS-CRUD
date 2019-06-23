import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    occupation: String,
    status: Boolean,
})