import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 55,
  })
  name: string;

  @Column({
    length: 55,
  })
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  //   @Column()
  //   profilePicture: string;

  @Column()
  isAdmin: boolean;
}
