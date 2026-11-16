import { Module } from '@nestjs/common';
import { SubscribersService } from './subscribers.service.js';
import { SubscribersController } from './subscribers.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from './subscriber.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  controllers: [SubscribersController],
  providers: [SubscribersService],
})
export class SubscribersModule {}
