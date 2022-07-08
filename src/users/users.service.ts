import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './dto/create-user-input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async findAll():Promise<User[]>{
        return this.userRepository.find()
    }

    async findOne(id: string):Promise<User>{
        return this.userRepository.findOneBy({id})
    }

    async create(user: UserCreateDTO):Promise<User>{
        let userCreate = this.userRepository.create(user)
        return this.userRepository.save(userCreate)
    }


}
