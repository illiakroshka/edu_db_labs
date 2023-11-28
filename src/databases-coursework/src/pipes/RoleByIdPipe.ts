import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { RolesRepository } from '../database/repositories/RolesRepository';

@Injectable()
export class RoleByIdPipe implements PipeTransform {
  constructor (
    private rolesRepository: RolesRepository,
  ) {}

  async transform (roleId: number) {
    const role = await this.rolesRepository.findById(roleId);
    if (!role) {
      throw new NotFoundException('Role with such id is not found');
    }
    return roleId;
  }
}