import { Injectable } from '@nestjs/common';
import { User } from 'src/database/entities/accounts/user';
import { DataSource, Repository } from 'typeorm';

/**
 * Repository service for user entity
 */
@Injectable()
export class UserRepositoryService extends Repository<User> {

    /**
     * Creates a new instance of the UserRepositoryService
     * @param _dataSource The data source to use for the repository
     */
    constructor(_dataSource: DataSource) {
        super(User, _dataSource.createEntityManager());
    }

    /**
     * Checks if a user exists by username or email
     * @param identifier The username or email of the user to check
     * @returns True if the user exists, false otherwise
     */
    public checkUserExists(identifier: string): Promise<boolean> {
        return this.exists({
            where: [
                { username: identifier },
                { email: identifier }
            ]
        });
    }

    /**
     * Find a user by username or email
     * @param identifier The username or email of the user to find
     * @returns The user if found, null otherwise
     */
    public findByUsernameOrEmail(identifier: string): Promise<User | null> {
        return this.findOne({
            where: [
                { username: identifier },
                { email: identifier }
            ]
        });
    }

}
