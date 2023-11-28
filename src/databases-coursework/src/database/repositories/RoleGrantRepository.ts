import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoleGrantRepository {
  constructor (
    private prisma: DatabaseService,
  ) {}

  async findMany (data: Prisma.roleGrantFindManyArgs) {
    return this.prisma.roleGrant.findMany({
      ...data,
    });
  }

  async create (data: Prisma.roleGrantUncheckedCreateInput) {
    return this.prisma.roleGrant.create({
      data,
    });
  }

  async deleteById (roleId: number) {
    return this.prisma.roleGrant.delete({
      where: {
        Id: roleId,
      },
    });
  }

  async findById (roleId: number) {
    return this.prisma.roleGrant.findUnique({
      where: {
        Id: roleId,
      },
    });
  }
}