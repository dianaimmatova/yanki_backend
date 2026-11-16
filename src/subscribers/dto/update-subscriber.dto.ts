import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriberDto } from './create-subscriber.dto.js';

export class UpdateSubscriberDto extends PartialType(CreateSubscriberDto) {}
