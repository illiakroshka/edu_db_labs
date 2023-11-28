import { DatabaseService } from '../database.service';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsRepository {
  constructor (
    private prisma: DatabaseService,
  ) {}

  async findMany (data: Prisma.projectsFindManyArgs) {
    return this.prisma.projects.findMany({
      ...data,
    });
  }

  async create (data: Prisma.projectsUncheckedCreateInput) {
    return this.prisma.projects.create({
      data,
    });
  }

  async deleteById (id: number) {
    return this.prisma.projects.delete({
      where: {
        Id: id,
      },
    });
  }

  async findById (id: number) {
    return this.prisma.projects.findUnique({
      where: {
        Id: id,
      },
    });
  }

  async update (args: Prisma.projectsUpdateArgs) {
    return this.prisma.projects.update({
      ...args,
    });
  }
}