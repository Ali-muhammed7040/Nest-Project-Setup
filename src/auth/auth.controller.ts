import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() authDto: SignUpDto) {
    return this.authService.signUp(authDto);
  }

  @Post('signin')
  async signIn(@Body() authDto: SignInDto) {
    return this.authService.signIn(authDto);
  }
}
