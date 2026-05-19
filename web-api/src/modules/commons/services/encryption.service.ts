import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

/**
 * Encryption Service
 */
@Injectable()
export class EncryptionService {

    /**
     * Number of salt rounds to use for bcrypt.
     * Higher values are more secure but slower.
     */
    private readonly _saltRounds = 10;

    /**
     * Hash a value using bcrypt.
     * @param value The value to hash.
     * @returns A promise that resolves to the hash of the value.
     */
    public async hash(value: string): Promise<string> {
        const salt = await bcrypt.genSalt(this._saltRounds);
        return bcrypt.hash(value, salt);
    }

    /**
     * Compare a plain value with a hash.
     * @param value The plain value to compare.
     * @param hash The hash to compare against.
     * @returns A promise that resolves to true if the value matches the hash, false otherwise.
     */
    public async compare(value: string, hash: string): Promise<boolean> {
        return bcrypt.compare(value, hash);
    }

}
