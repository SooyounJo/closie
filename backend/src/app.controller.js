const { Controller, Get } = require('@nestjs/common');
const { AppService } = require('./app.service');

@Controller()
class AppController {
  constructor() {
    this.appService = new AppService();
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}

module.exports = { AppController }; 