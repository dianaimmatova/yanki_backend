import { Column, Entity, ManyToOne } from "typeorm";
import { Category } from "../categories/category.entity.js";
import { BaseEntity } from "../helper/base.entity.js";

@Entity()
export class Product extends BaseEntity{
    @Column({unique: true})
    sku: string

    @Column()
    name: string

    @Column({
        type: 'text'
    })
    description: string

    @Column({
        type: 'text'
    })
    composition: string

    @Column({
        type: 'text'
    })
    care: string

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    price: string

    @Column({
        default: false
    })
    isNew: boolean

    @ManyToOne(() => Category, {onDelete: 'RESTRICT'})
    category: Category

}
