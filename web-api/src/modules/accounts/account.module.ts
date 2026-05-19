import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';

/**
 * Account module
 */
@Module({
  imports: [
    UserModule,
  ],
})
export class AccountModule { }
