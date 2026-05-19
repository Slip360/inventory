import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from '../repositories/user-repository.service';

@Injectable()
export class UserService {

    constructor(
        private readonly _userRepository: UserRepositoryService
    ) { }



}
