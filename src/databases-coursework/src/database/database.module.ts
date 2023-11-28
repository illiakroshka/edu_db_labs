import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ProjectsRepository } from './repositories/ProjectsRepository';
import { RolesRepository } from './repositories/RolesRepository';
import { PermissionsRepository } from './repositories/PermissionsRepository';
import { RoleGrantRepository } from './repositories/RoleGrantRepository';

@Global()
@Module({
  providers: [DatabaseService, ProjectsRepository, RolesRepository, PermissionsRepository, RoleGrantRepository],
  exports: [DatabaseService, ProjectsRepository, RolesRepository, PermissionsRepository, RoleGrantRepository],
})
export class DatabaseModule {}
