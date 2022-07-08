import { Args, Mutation, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { UserCreateDTO } from './dto/create-user-input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver((of)=>User)
export class UsersResolver {
    constructor(private usersService:UsersService){}
    @Query(()=>[User],{name:"getAllUsers"})
    findAll(){
        return this.usersService.findAll()
    }

    @Query(()=> User, {name:"user"})
    findOne(@Args('id') id:string){
        return this.usersService.findOne(id)
    }

    @Mutation(()=>User, {name:"createUser"})
    create(@Args('user') user:UserCreateDTO){
        return this.usersService.create(user)
    }

    @ResolveReference()
    resolveField(ref:{__typename:string,id: string}){
        return this.usersService.findOne(ref.id)
    }
}
