import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain() {
    return {
      author_url: 'https://github.com/restuaar',
      version: '1.0.0',
      github_url: 'https://github.com/restuaar/okk-ristek',
      message: 'Welcome to OKK UI Ristek 2024!',
    };
  }
}
