import { DatabaseService } from '../database.service';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionsRepository {
  constructor (
    private prisma: DatabaseService,
  ) {}

  async findMany (data: Prisma.permissionsFindManyArgs) {
    return this.prisma.permissions.findMany({
      ...data,
    });
  }

  async create (data: Prisma.permissionsUncheckedCreateInput) {
    return this.prisma.permissions.create({
      data,
    });
  }

  async deleteById (id: number) {
    return this.prisma.permissions.delete({
      where: {
        Id: id,
      },
    });
  }

  async findById (id: number) {
    return this.prisma.permissions.findUnique({
      where: {
        Id: id,
      },
    });
  }
}