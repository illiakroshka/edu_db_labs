import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { PermissionsRepository } from '../database/repositories/PermissionsRepository';

@Injectable()
export class PermissionByIdPipe implements PipeTransform {
  constructor (
    private permissionsRepository: PermissionsRepository,
  ) {}

  async transform (permissionId: number) {
    const permission = await this.permissionsRepository.findById(permissionId);
    if (!permission) {
      throw new NotFoundException('Permission with such id is not found');
    }
    return permissionId;
  }
}