import { Injectable } from '@nestjs/common';
import { ProjectsRepository } from '../database/repositories/ProjectsRepository';
import { CreateProjectDTO } from '../dtos/CreateProjectDTO';

@Injectable()
export class ProjectsService {
  constructor (
    private projectRepository: ProjectsRepository,
  ) {}

  async getAllProjects () {
    return this.projectRepository.findMany({});
  }

  async createProject (data: CreateProjectDTO) {
    return this.projectRepository.create({
      Name: data.name,
      Description: data.description,
      Status: data.status,
    });
  }

  async deleteProject (projectId: number) {
    return this.projectRepository.deleteById(projectId);
  }

  async updateStatus (projectId: number, projectStatus: string) {
    return this.projectRepository.update({
      data: {
        Status: projectStatus,
      },
      where: {
        Id: projectId,
      },
    });
  }

  async getProjectById (projectId: number) {
    return this.projectRepository.findById(projectId);
  }
}
