import { DatabaseService } from '../database.service';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesRepository {
  constructor (
    private prisma: DatabaseService,
  ) {}

  async findMany (data: Prisma.rolesFindManyArgs) {
    return this.prisma.roles.findMany({
      ...data,
    });
  }

  async create (args: Prisma.rolesCreateArgs) {
    return this.prisma.roles.create({
      ...args,
    });
  }

  async deleteById (roleId: number) {
    return this.prisma.roles.delete({
      where: {
        Id: roleId,
      },
    });
  }

  async findById (roleId: number) {
    return this.prisma.roles.findUnique({
      where: {
        Id: roleId,
      },
    });
  }
}