import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './database/database-config';
import { AccountModule } from './modules/accounts/account.module';
import { CommonModule } from './modules/commons/common.module';

/**
 * Main application module
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    AccountModule,
    CommonModule,
  ],
})
export class AppModule { }
