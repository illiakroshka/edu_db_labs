import { Injectable } from '@nestjs/common';
import { PermissionsRepository } from '../database/repositories/PermissionsRepository';
import { CreatePermissionDTO } from '../dtos/CreatePermissionDTO';

@Injectable()
export class PermissionsService {
  constructor(
    private permissionRepository: PermissionsRepository,
  ) {}

  async getAllPermissions () {
    return this.permissionRepository.findMany({});
  }

  async createPermission (body: CreatePermissionDTO) {
    return this.permissionRepository.create({
      Permission: body.permission,
    });
  }

  async deletePermission (permissionId: number) {
    return this.permissionRepository.deleteById(permissionId);
  }
}
