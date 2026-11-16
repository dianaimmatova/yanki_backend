import { Column, Entity } from "typeorm";
import { BaseEntity } from "../helper/base.entity.js";

@Entity()
export class Category extends BaseEntity {
    @Column({unique: true})
    name: string

    @Column({unique: true})
    slug: string
}
