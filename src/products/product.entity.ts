import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne
} from "typeorm";
import { CURRENT_TIMESTAMP } from '../utils/constants';


@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '150'})
    title: string;

    @Column()
    description: string;

    @Column({type: 'float'})
    price: number;

    @CreateDateColumn({ type: 'timestamp', default: () => CURRENT_TIMESTAMP })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP })
    updatedAt: Date;

  
}