import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { BaseEntity } from "../helper/base.entity.js";
import { User } from "../users/user.entity.js";
import { ProductVariant } from "../products/entities/product-variant.entity.js";

@Entity()
@Unique(['user', 'productVariant'])
export class Cart extends BaseEntity {
    @Column({
        default: 1
    })
    quantity: number

    @ManyToOne(() => User, {onDelete: 'CASCADE'})
    user: User

    @ManyToOne(() => ProductVariant, {onDelete: 'CASCADE'})
    productVariant: ProductVariant
}
