import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import path from 'node:path'

import { DatabaseModule } from '../database/database.module'
import { HttpResolver } from './http.resolver'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver
    }),
    DatabaseModule
  ],
  providers: [HttpResolver]
})
export class HttpModule {}
