import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class Katas extends Document {
  @PrimaryGeneratedColumn()
    userId: number

  @Column()
    name: string

  @Column()
    description: string

  @Column()
    level: number

  @Column()
    date: string

  @Column()
    valoracion: number

  @Column()
    changes: number
};
