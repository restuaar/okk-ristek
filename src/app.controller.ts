import {
  All,
  Controller,
  Get,
  MethodNotAllowedException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMain() {
    return this.appService.getMain();
  }

  @All()
  postMain(): MethodNotAllowedException {
    return new MethodNotAllowedException(
      'Method not allowed. Please use GET method instead.',
    );
  }
}
