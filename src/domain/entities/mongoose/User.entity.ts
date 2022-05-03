import mongoose, { Schema } from 'mongoose'

export interface User extends Document {
    name: string;
    email: string;
    age: string;
};

const UserSchema:Schema = new Schema<User>({
  name: String,
  email: String,
  age: Number
})

export const user = mongoose.model<User>('user', UserSchema)
