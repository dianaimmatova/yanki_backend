import { Column, Entity, Generated, ManyToOne } from "typeorm";
import { BaseEntity } from "../../helper/base.entity.js";
import { User } from "../../users/user.entity.js";

export enum Status {
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    NEW = 'new',
    PROCESSING = 'processing',
}

export enum Delivery {
    SELF_PICKUP = 'self_pickup',
    NOVA_POSHTA = 'nova_poshta',
    DHL = 'dhl',
    UKR_POSHTA = 'ukrposhta'
}

export enum Payment {
    PRIVAT_24 = 'privat_24',
    VISA_MASTER_CARD = 'visa_master_card',
    CASH_ON_DELIVERY = 'cash_on_delivery'
}

@Entity('orders')
export class Order extends BaseEntity {
    @Column({
        unique: true
    })
    @Generated('increment')
    orderNumber: number

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.NEW
    })
    status: Status

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    sum: string

    @Column({
        type: 'enum',
        enum: Delivery
    })
    delivery: Delivery

    @Column({
        type: 'enum',
        enum: Payment
    })
    payment: Payment

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    email: string

    @Column()
    phone: string

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

    @ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
    user: User | null
}
