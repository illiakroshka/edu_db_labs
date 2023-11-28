import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProjectsModule } from './projects/projects.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RoleGrantModule } from './role-grant/role-grant.module';

@Module({
  imports: [DatabaseModule, ProjectsModule, RolesModule, PermissionsModule, RoleGrantModule],
})
export class AppModule {}
