import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "TODO", synchronize: false})
export class TodoEntity {
    /**
     * PK
     */
    @PrimaryGeneratedColumn({name: "id", type:"bigint"}) id!: string

    /**
     * Columns
     */
    @Column({name: "contents", nullable: false}) contents!: string
    @Column({name: "completed", nullable: false, default: "N"}) completed!: string

    /**
     * FK
     */

    @Column({name: "target_user_id", nullable: false}) targetUserId!: string

    /**
     * Common
     */
    @Column({name: "locked", nullable: false, default: "N"}) locked!: string

    @Column({ type: "datetime", name: "created_at" }) createdAt!: string
    @Column({ type: "datetime", name: "updated_at" }) updatedAt!: string
    // @Column({ type: "datetime", name: "deleted_at", nullable: true }) deletedAt: string | undefined

    @Column({ name: "created_by" }) createdBy!: string
    @Column({ name: "updated_by" }) updatedBy!: string
    // @Column({ name: "deleted_by", nullable: true }) deletedBy: string | undefined
}