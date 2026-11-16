import { Column, CreateDateColumn, Entity } from "typeorm";
import { BaseEntity } from "../helper/base.entity.js";

@Entity()
export class Subscriber extends BaseEntity {
    @Column({unique: true})
    email: string
}
