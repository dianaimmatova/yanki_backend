import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { Product } from "./product.entity.js";
import { BaseEntity } from "../../helper/base.entity.js";


export enum Sizes {
    XXS = 'XXS',
    XS = 'XS', 
    S = 'S',
    M = 'M', 
    L = 'L'
}

@Entity()
@Unique(['product', 'colorName', 'size'])
export class ProductVariant extends BaseEntity{
    @Column()
    colorName: string

    @Column()
    colorCode: string

    @Column({
        type: 'enum',
        enum: Sizes
    })
    size: Sizes

    @Column({
        default: 0
    })
    stock: number

    @ManyToOne(() => Product, {onDelete: "CASCADE"})
    product: Product
}