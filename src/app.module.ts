import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import {join} from "path"
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule,GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    driver: ApolloFederationDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')
  }),
  TypeOrmModule.forRoot({
    type:'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Koneti@98',
    database: 'user',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  })
],
  controllers: [],
  providers: [],
})
export class AppModule {}
