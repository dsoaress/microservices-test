import { UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'

import { AuthorizationGuard } from './guards/authorization.guard'

@Resolver()
export class HttpResolver {
  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  status() {
    return 'server is running'
  }
}
