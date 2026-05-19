import { Module } from '@nestjs/common';
import { EncryptionService } from './services/encryption.service';

/**
 * Common module for shared services
 */
@Module({
  providers: [
    EncryptionService,
  ],
  exports: [
    EncryptionService,
  ],
})
export class CommonModule { }
