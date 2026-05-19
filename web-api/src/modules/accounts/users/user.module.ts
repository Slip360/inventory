import { Module } from '@nestjs/common';
import { UserRepositoryService } from './repositories/user-repository.service';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/accounts/user';
import { CommonModule } from 'src/modules/commons/common.module';

/**
 * User module
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    CommonModule,
  ],
  providers: [
    UserRepositoryService,
    UserService,
  ],
})
export class UserModule { }
