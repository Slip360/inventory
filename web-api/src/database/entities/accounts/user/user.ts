import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
 * User entity
 */
@Entity({ name: 'users', schema: 'accounts' })
export class User {
    /**
     * The id of the user
     */
    @PrimaryGeneratedColumn('identity', {
        name: 'id',
        type: 'integer'
    })
    id: number;

    /**
     * The username of the user
     */
    @Column({
        name: 'username',
        type: 'varchar',
        length: 50,
        nullable: false,
        unique: true
    })
    username: string;

    /**
     * The email of the user
     */
    @Column({
        name: 'email',
        type: 'varchar',
        length: 255,
        nullable: false,
        unique: true
    })
    email: string;

    /**
     * The password hash of the user
     */
    @Column({
        name: 'password_hash',
        type: 'varchar',
        length: 255,
        nullable: false
    })
    passwordHash: string;

    /**
     * The first name of the user
     */
    @Column({
        name: 'names',
        type: 'varchar',
        length: 255,
        nullable: false
    })
    names: string;

    /**
     * The last name of the user
     */
    @Column({
        name: 'last_names',
        type: 'varchar',
        length: 255,
        nullable: true
    })
    lastNames: string;

    /**
     * The status of the user
     */
    @Column({
        name: 'is_active',
        type: 'boolean',
        nullable: false,
        default: true
    })
    isActive: boolean;

    /**
     * The date when the user was created
     */
    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        nullable: false
    })
    createdAt: Date;

    /**
     * The date when the user was updated
     */
    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        nullable: false
    })
    updatedAt: Date;
}
