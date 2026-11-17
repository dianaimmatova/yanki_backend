import { Column, Entity } from "typeorm";
import { BaseEntity } from "../helper/base.entity.js";

@Entity()
export class User extends BaseEntity {
    @Column({ unique: true })
    email: string

    @Column()
    passwordHash: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    name: string | null

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    surname: string | null

    @Column({
        type: 'varchar',
        length: 20,
        nullable: true
    })
    phone: string | null

    @Column({
        type: 'varchar',
        length: 200,
        nullable: true
    })
    city: string | null

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true
    })
    postOffice: string | null
}
