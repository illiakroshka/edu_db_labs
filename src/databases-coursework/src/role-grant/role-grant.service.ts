import { Injectable } from '@nestjs/common';
import { RoleGrantRepository } from '../database/repositories/RoleGrantRepository';
import { CreateRoleGrantDTO } from '../dtos/CreateRoleGrantDTO';

@Injectable()
export class RoleGrantService {
  constructor (
    private roleGrantRepository: RoleGrantRepository,
  ) {}

  async getAllGrants () {
    return this.roleGrantRepository.findMany({});
  }

  async createRoleGrant (body: CreateRoleGrantDTO) {
    return this.roleGrantRepository.create({
      RoleId: body.roleId,
      PermissionId: body.permissionId,
    });
  }

  async deleteRoleGrant (roleGrantId: number) {
    return this.roleGrantRepository.deleteById(roleGrantId);
  }
}
