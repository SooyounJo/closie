const { Module } = require('@nestjs/common');
const { AppController } = require('./app.controller');
const { AppService } = require('./app.service');

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
class AppModule {}

module.exports = { AppModule }; 