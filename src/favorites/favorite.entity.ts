import { Entity, ManyToOne, Unique } from "typeorm";
import { User } from "../users/user.entity.js";
import { Product } from "../products/entities/product.entity.js";
import { BaseEntity } from "../helper/base.entity.js";


@Entity()
@Unique(['user', 'product'])
export class Favorite extends BaseEntity{
    @ManyToOne(() => User, {onDelete: 'CASCADE'})
    user: User

    @ManyToOne(() => Product, {onDelete: 'CASCADE'})
    product: Product
}
