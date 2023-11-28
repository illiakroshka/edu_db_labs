import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDTO } from "../dtos/CreateRoleDTO";
import { RoleByIdPipe } from '../pipes/RoleByIdPipe';

@Controller('roles')
export class RolesController {
  constructor(
    private rolesService: RolesService,
  ) {}

  @Get()
  async getAllRoles() {
    return this.rolesService.getAllRoles();
  }

  @Post()
  async createRole(
    @Body() body: CreateRoleDTO,
  ){
    return this.rolesService.createRole(body);
  }

  @Delete('/:roleId')
  async deleteRole(
    @Param('roleId', ParseIntPipe, RoleByIdPipe) roleId: number,
  ){
    return this.rolesService.deleteRole(roleId);
  }
}
