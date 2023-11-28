import { Injectable } from '@nestjs/common';
import { RolesRepository } from '../database/repositories/RolesRepository';
import {CreateRoleDTO} from "../dtos/CreateRoleDTO";

@Injectable()
export class RolesService {
  constructor(
    private rolesRepository: RolesRepository,
  ) {}

  async getAllRoles (){
    return this.rolesRepository.findMany({})
  }

  async createRole (body: CreateRoleDTO) {
    return this.rolesRepository.create({
      data:{
        Name: body.name,
      },
    });
  }

  async deleteRole (roleId: number) {
    return this.rolesRepository.deleteById(roleId);
  }
}
