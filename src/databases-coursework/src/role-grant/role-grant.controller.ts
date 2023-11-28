import { Controller, Get, Post, Body, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { RoleGrantService } from './role-grant.service';
import { CreateRoleGrantDTO } from '../dtos/CreateRoleGrantDTO';
import { CreateRoleGrantPipe } from '../pipes/CreateRoleGrantPipe';
import { RoleGrantByIdPipe } from '../pipes/RoleGrantByIdPipe';

@Controller('role-grant')
export class RoleGrantController {
  constructor (
    private roleGrantService: RoleGrantService,
  ) {}

  @Get()
  async getRoleGrants () {
    return this.roleGrantService.getAllGrants();
  }

  @Post()
  async createRoleGrant (
    @Body(CreateRoleGrantPipe)body: CreateRoleGrantDTO
  ) {
    return this.roleGrantService.createRoleGrant(body);
  }

  @Delete('/:roleGrantId')
  async deleteRoleGrant (
    @Param('roleGrantId', ParseIntPipe, RoleGrantByIdPipe) roleGrantId: number,
  ) {
    return this.roleGrantService.deleteRoleGrant(roleGrantId);
  }
}
