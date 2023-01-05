import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Project } from "./Project";
import { Score } from "./Score";

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

  @ManyToMany(() => Project)
  @JoinTable({
    name: "score",
    // joinColumn: {
    //   name: "user",
    //   referencedColumnName: "id",
    // },
    // inverseJoinColumn: {
    //   name: "category",
    //   referencedColumnName: "id",
    // },
  })
  projects: Project[];

  @Column()
  isAdmin: boolean;
}
