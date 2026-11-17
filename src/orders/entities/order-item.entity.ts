import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { BaseEntity } from "../../helper/base.entity.js";
import { Order } from "./order.entity.js";
import { ProductVariant } from "../../products/entities/product-variant.entity.js";

@Entity()
@Unique(['order', 'productVariant'])
export class OrderItem extends BaseEntity {
    @Column()
    quantity: number

   @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    unitPrice: string

    @Column()
    name: string

    @Column()
    sku: string

    @Column()
    colorName: string

    @Column()
    colorCode: string

    @Column()
    size: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    url: string | null

    @ManyToOne(() => Order, {onDelete: "CASCADE"})
    order: Order

    @ManyToOne(() => ProductVariant, {onDelete: 'SET NULL', nullable: true})
    productVariant: ProductVariant | null
}