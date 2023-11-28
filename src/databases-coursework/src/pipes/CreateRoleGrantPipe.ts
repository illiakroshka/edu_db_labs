import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { CreateRoleGrantDTO } from '../dtos/CreateRoleGrantDTO';
import { PermissionsRepository } from '../database/repositories/PermissionsRepository';
import { RolesRepository } from '../database/repositories/RolesRepository';

@Injectable()
export class CreateRoleGrantPipe implements PipeTransform {
  constructor (
    private permissionRepository: PermissionsRepository,
    private roleRepository: RolesRepository,
  ) {
  }
  async transform (body: CreateRoleGrantDTO) {
    const permission = await this.permissionRepository.findById(body.permissionId);
    if (!permission) {
      throw new NotFoundException('Permission with such id is not found');
    }

    const role = await this.roleRepository.findById(body.roleId);
    if (!role) {
      throw new NotFoundException('Role with such id is not found');
    }

    return body;
  }
}