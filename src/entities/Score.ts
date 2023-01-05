import { Entity, JoinTable, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class Score {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  projectId: number;

  @ManyToOne(() => User)
  @JoinTable()
  user: User;

  @ManyToOne(() => Project)
  @JoinTable()
  project: Project;
}
