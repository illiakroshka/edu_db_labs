import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDTO } from '../dtos/CreateProjectDTO';
import { ProjectByIdPipe } from '../pipes/ProjectByIdPipe';
import { UpdateProjectStatusDTO } from '../dtos/UpdateProjectStatusDTO';

@Controller('projects')
export class ProjectsController {
  constructor (
    private projectService: ProjectsService,
  ) {}

  @Get()
  async getAllProjects () {
    return this.projectService.getAllProjects();
  }

  @Get('/:projectId')
  async getProject (
    @Param('projectId', ParseIntPipe, ProjectByIdPipe) projectId: number,
  ) {
    return this.projectService.getProjectById(projectId);
  }

  @Post()
  async createNewProject (
    @Body() body: CreateProjectDTO,
  ) {
    return this.projectService.createProject(body);
  }

  @Delete('/:projectId')
  async deleteProject (
    @Param('projectId', ParseIntPipe, ProjectByIdPipe) projectId: number,
  ) {
    return this.projectService.deleteProject(projectId);
  }

  @Patch('/:projectId')
  async updateStatus (
    @Param('projectId', ParseIntPipe, ProjectByIdPipe) projectId: number,
    @Body() body: UpdateProjectStatusDTO,
  ) {
    return this.projectService.updateStatus(projectId, body.status);
  }
}
