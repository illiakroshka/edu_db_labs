import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { RoleGrantRepository } from '../database/repositories/RoleGrantRepository';

@Injectable()
export class RoleGrantByIdPipe implements PipeTransform {
  constructor (
    private roleGrantRepository: RoleGrantRepository,
  ) {}

  async transform (roleGrantId: number) {
    const roleGrant = await this.roleGrantRepository.findById(roleGrantId);
    if (!roleGrant) {
      throw new NotFoundException('Role-grant with such id is not found');
    }
    return roleGrantId;
  }
}