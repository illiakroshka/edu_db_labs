import { Module } from '@nestjs/common';
import { RoleGrantService } from './role-grant.service';
import { RoleGrantController } from './role-grant.controller';

@Module({
  providers: [RoleGrantService],
  controllers: [RoleGrantController],
  exports: [RoleGrantService],
})
export class RoleGrantModule {}
