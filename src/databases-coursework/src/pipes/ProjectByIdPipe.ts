import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { ProjectsRepository } from '../database/repositories/ProjectsRepository';

@Injectable()
export class ProjectByIdPipe implements PipeTransform {
  constructor (
    private projectRepository: ProjectsRepository
  ) {}
  async transform (projectId: number) {
    const project = await this.projectRepository.findById(projectId);
    if (!project) {
      throw new NotFoundException('Project with such id is not found');
    }
    return projectId;
  }
}