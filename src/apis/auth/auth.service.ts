import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
  ) {}
  async getAccessToken({ res }) {
    const accessToken = this.jwtService.sign(
      { email: 'chorales@naver.com' },
      { secret: 'accesskey', expiresIn: '1h' },
    );

    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Access-Control-Allow-Credentials', 'true');
    // res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    // res.setHeader(
    //   'Access-Control-Allow-Headers',
    //   'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    // );
    // res.setHeader(
    //   'Set-Cookie',
    //   `accessToken=${accessToken}; path=/; domain=.shakiback.shop; SameSite=None; Secure; httpOnly;`,
    // );

    res.setHeader('Set-Cookie', `accessToken=${accessToken}; path=/;`);
  }
}
