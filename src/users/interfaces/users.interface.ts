import { Document } from "mongoose";

export interface Users extends Document {
    id?: number,
    firstName: string,
    lastName: string,
    occupation: string,
    status: boolean,
}
