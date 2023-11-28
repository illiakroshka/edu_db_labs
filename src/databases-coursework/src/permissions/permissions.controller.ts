import { Controller, Get, Post, Body, Delete, ParseIntPipe, Param } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDTO } from '../dtos/CreatePermissionDTO';
import { PermissionByIdPipe } from '../pipes/PermissionByIdPipe';

@Controller('permissions')
export class PermissionsController {
  constructor (
    private permissionService: PermissionsService,
  ) {}

  @Get()
  async getPermissions () {
    return this.permissionService.getAllPermissions();
  }

  @Post()
  async createPermission(
    @Body() body: CreatePermissionDTO,
  ) {
    return this.permissionService.createPermission(body);
  }

  @Delete('/:permissionId')
  async deletePermission (
    @Param('permissionId', ParseIntPipe, PermissionByIdPipe) permissionId: number,
  ) {
    return this.permissionService.deletePermission(permissionId);
  }
}
