import { Directive, Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Directive('@key(fields:"id")')
@Entity()

export class User {
    @Field((type)=>ID)
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Field()
    @Column()
    name: string
    @Field(()=>Int)
    @Column()
    code: number
}