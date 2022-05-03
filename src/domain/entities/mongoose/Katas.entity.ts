import mongoose, { Schema } from 'mongoose'

export interface Katas extends Document {
    name: string;
    description: string;
    level: number;
    userId: number;
    date: string;
    valoracion: number;
    changes: number;
};

const KatasSchema:Schema = new Schema<Katas>({
  name: String,
  description: String,
  level: Number,
  userId: Number,
  date: String,
  valoracion: Number,
  changes: Number
})

export const katas = mongoose.model<Katas>('katas', KatasSchema)
