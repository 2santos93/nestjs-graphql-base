import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { ConfigModule } from '@nestjs/config';
import { graphqlConfig } from './config/module/graphql.config';
import { typeOrmConfig } from './config/module/typeOrm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from './config/module/env.config';

@Module({
  imports: [ConfigModule.forRoot(envConfig), TypeOrmModule.forRoot(typeOrmConfig), GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig), HelloWorldModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
