import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum PigStatus {
    DEFAULT = 'default',
    HAPPY = 'happy',
    PUTIN = 'putin',
}

@Entity()
export class Pig {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: PigStatus,
        default: PigStatus.DEFAULT
    })
    status: PigStatus;

    @UpdateDateColumn()
    updatedAt: Date;
}