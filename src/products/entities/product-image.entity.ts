import { Column, Entity, ManyToOne } from "typeorm";
import { Product } from "./product.entity.js";
import { BaseEntity } from "../../helper/base.entity.js";

@Entity()
export class ProductImage extends BaseEntity{
    @Column()
    url: string

    @Column({
        default: 0
    })
    sort: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    colorName: string | null

    @ManyToOne(() => Product, {onDelete: 'CASCADE'})
    product: Product
}