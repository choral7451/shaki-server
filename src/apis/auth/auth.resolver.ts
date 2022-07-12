import { Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //
  ) {}
  @Query(() => String)
  test() {
    return 'test';
  }

  @Mutation(() => Boolean)
  async login(
    @Context() context: any, //
  ) {
    await this.authService.getAccessToken({ res: context.req.res });
    return true;
  }
}
