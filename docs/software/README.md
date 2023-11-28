# Реалізація інформаційного та програмного забезпечення

В рамках проєкту розробляється: 
## SQL-скрипт для створення на початкового наповнення бази даних

```sql
-- -----------------------------------------------------
-- Schema project_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `project_db`;
USE `project_db` ;

-- -----------------------------------------------------
-- Table `project_db`.`roles`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`roles` ;

CREATE TABLE IF NOT EXISTS `project_db`.`roles` (
   `Id` INT NOT NULL AUTO_INCREMENT,
   `Name` VARCHAR(30) NULL DEFAULT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    UNIQUE INDEX `Name` (`Name` ASC) VISIBLE);

-- -----------------------------------------------------
-- Table `project_db`.`users`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`users` ;

CREATE TABLE IF NOT EXISTS `project_db`.`users` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Login` VARCHAR(45) NOT NULL,
    `Picture` MEDIUMBLOB NOT NULL,
    `Password` BLOB NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `Role` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    UNIQUE INDEX `Login` (`Login` ASC) VISIBLE,
    UNIQUE INDEX `Email` (`Email` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `project_db`.`members`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`members` ;

CREATE TABLE IF NOT EXISTS `project_db`.`members` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `RoleId` INT NOT NULL,
    `UserId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `roleFK_idx` (`RoleId` ASC) VISIBLE,
    INDEX `userFK_idx` (`UserId` ASC) VISIBLE,
    CONSTRAINT `roleFK`
    FOREIGN KEY (`RoleId`)
    REFERENCES `project_db`.`roles` (`Id`),
    CONSTRAINT `userFK`
    FOREIGN KEY (`UserId`)
    REFERENCES `project_db`.`users` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`projects`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`projects` ;

CREATE TABLE IF NOT EXISTS `project_db`.`projects` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `Status` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE);

-- -----------------------------------------------------
-- Table `project_db`.`payments`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`payments` ;

CREATE TABLE IF NOT EXISTS `project_db`.`payments` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `CardNumber` INT NOT NULL,
    `CardCVV` INT NOT NULL,
    `CardExpireDate` DATETIME NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `ProjectId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    CONSTRAINT `payments_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`permissions`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`permissions` ;

CREATE TABLE IF NOT EXISTS `project_db`.`permissions` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Permission` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `project_db`.`projects_members`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`projects_members` ;

CREATE TABLE IF NOT EXISTS `project_db`.`projects_members` (
    `MemberId` INT NOT NULL,
    `ProjectId` INT NOT NULL,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    INDEX `MemberId` (`MemberId` ASC) VISIBLE,
    CONSTRAINT `projects_members_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`),
    CONSTRAINT `projects_members_ibfk_2`
    FOREIGN KEY (`MemberId`)
    REFERENCES `project_db`.`members` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`reviews`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`reviews` ;

CREATE TABLE IF NOT EXISTS `project_db`.`reviews` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Text` VARCHAR(100) NOT NULL,
    `Rate` INT NOT NULL,
    `ProjectId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    CONSTRAINT `reviews_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`role_grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project_db`.`role_grant` ;

CREATE TABLE IF NOT EXISTS `project_db`.`role_grant` (
   `RoleId` INT NOT NULL,
   `PermissionId` INT NOT NULL,
    INDEX `RoleId` (`RoleId` ASC) VISIBLE,
    INDEX `PermissionId` (`PermissionId` ASC) VISIBLE,
    CONSTRAINT `role_grant_ibfk_1`
    FOREIGN KEY (`RoleId`)
    REFERENCES `project_db`.`roles` (`Id`),
    CONSTRAINT `role_grant_ibfk_2`
    FOREIGN KEY (`PermissionId`)
    REFERENCES `project_db`.`permissions` (`Id`));


-- -----------------------------------------------------
-- Table `project_db`.`tasks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project_db`.`tasks` ;

CREATE TABLE IF NOT EXISTS `project_db`.`tasks` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Developer` VARCHAR(45) NOT NULL,
    `Status` VARCHAR(20) NOT NULL,
    `Deadline` DATETIME NOT NULL,
    `ProjectId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    CONSTRAINT `tasks_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`));

-- Inserting data into the roles table
INSERT INTO `project_db`.`roles` (`Name`) VALUES
('Teamlead'),
('Developer'),
('Admin');

-- Inserting data into the users table
INSERT INTO `project_db`.`users` (`Login`, `Picture`, `Password`, `Email`, `Role`) VALUES
('admin_user', 'admin_picture_blob', 'admin_password_blob', 'admin@example.com', 'Teamlead'),
('dev_user1', 'dev_picture_blob1', 'dev_password_blob1', 'dev1@example.com', 'Developer'),
('dev_user2', 'dev_picture_blob2', 'dev_password_blob2', 'dev2@example.com', 'Developer'),
('manager_user', 'manager_picture_blob', 'manager_password_blob', 'manager@example.com', 'Admin');

-- Inserting data into the members table
INSERT INTO `project_db`.`members` (`RoleId`, `UserId`) VALUES
(1, 1),
(2, 2),
(2, 3),
(3, 4);

-- Inserting data into the projects table
INSERT INTO `project_db`.`projects` (`Name`, `Description`, `Status`) VALUES
('Project A', 'Description for Project A', 'Active'),
('Project B', 'Description for Project B', 'Inactive'),
('Project C', 'Description for Project C', 'Pending');

-- Inserting data into the permissions table
INSERT INTO `project_db`.`permissions` (`Permission`) VALUES
('Read'),
('Write'),
('Execute');

-- Inserting data into the role_grant table
INSERT INTO `project_db`.`role_grant` (`RoleId`, `PermissionId`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 3),
(3, 2),
(3, 3);
-- Inserting data into the payments table
INSERT INTO `project_db`.`payments` (`Id`, `CardNumber`, `CardCVV`, `CardExpireDate`, `Email`, `ProjectId`) VALUES
(1, 123456, 123, '2023-12-31', 'payment1@example.com', 1),
(2, 987654, 456, '2023-11-30', 'payment2@example.com', 2),
(3, 111122, 789, '2023-10-31', 'payment3@example.com', 3);

-- Inserting data into the projects_members table
INSERT INTO `project_db`.`projects_members` (`MemberId`, `ProjectId`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 3);

-- Inserting data into the reviews table
INSERT INTO `project_db`.`reviews` (`Text`, `Rate`, `ProjectId`) VALUES
('Good project!', 5, 1),
('Could be better', 3, 2),
('Excellent work', 5, 3);

-- Inserting data into the tasks table
INSERT INTO `project_db`.`tasks` (`Name`, `Developer`, `Status`, `Deadline`, `ProjectId`) VALUES
('Task 1', 'dev_user1', 'In Progress', '2023-11-15', 1),
('Task 2', 'dev_user2', 'To Do', '2023-12-01', 2),
('Task 3', 'dev_user1', 'Completed', '2023-10-31', 3);


```

## RESTfull сервіс для управління даними

### Схема бази данних (Prisma ORM)


```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model members {
  Id               Int                @id @unique(map: "Id") @default(autoincrement())
  RoleId           Int
  UserId           Int
  roles            roles              @relation(fields: [RoleId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: "roleFK")
  users            users              @relation(fields: [UserId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: "userFK")
  projects_members projects_members[]

  @@index([RoleId], map: "roleFK_idx")
  @@index([UserId], map: "userFK_idx")
}

model payments {
  Id             Int      @id @unique(map: "Id") @default(autoincrement())
  CardNumber     Int
  CardCVV        Int
  CardExpireDate DateTime @db.DateTime(0)
  Email          String   @db.VarChar(50)
  ProjectId      Int
  projects       projects @relation(fields: [ProjectId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: "payments_ibfk_1")

  @@index([ProjectId], map: "ProjectId")
}

model permissions {
  Id         Int         @id @unique(map: "Id") @default(autoincrement())
  Permission String      @db.VarChar(50)
  role_grant roleGrant[]
}

model projects {
  Id               Int                @id @unique(map: "Id") @default(autoincrement())
  Name             String             @db.VarChar(50)
  Description      String             @db.VarChar(100)
  Status           String             @db.VarChar(20)
  payments         payments[]
  projects_members projects_members[]
  reviews          reviews[]
  tasks            tasks[]
}

model projects_members {
  Id        Int      @id @default(autoincrement())
  MemberId  Int
  ProjectId Int
  projects  projects @relation(fields: [ProjectId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: "projects_members_ibfk_1")
  members   members  @relation(fields: [MemberId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: "projects_members_ibfk_2")

  @@index([MemberId], map: "MemberId")
  @@index([ProjectId], map: "ProjectId")
}

model reviews {
  Id        Int      @id @unique(map: "Id") @default(autoincrement())
  Text      String   @db.VarChar(100)
  Rate      Int
  ProjectId Int
  projects  projects @relation(fields: [ProjectId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: "reviews_ibfk_1")

  @@index([ProjectId], map: "ProjectId")
}

model roleGrant {
  Id           Int         @id @default(autoincrement())
  RoleId       Int
  PermissionId Int
  roles        roles       @relation(fields: [RoleId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: "role_grant_ibfk_1")
  permissions  permissions @relation(fields: [PermissionId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: "role_grant_ibfk_2")

  @@index([PermissionId], map: "PermissionId")
  @@index([RoleId], map: "RoleId")
  @@map("role_grant")
}

model roles {
  Id         Int         @id @unique(map: "Id") @default(autoincrement())
  Name       String?     @unique(map: "Name") @db.VarChar(30)
  members    members[]
  role_grant roleGrant[]
}

model tasks {
  Id        Int      @id @unique(map: "Id") @default(autoincrement())
  Name      String   @db.VarChar(50)
  Developer String   @db.VarChar(45)
  Status    String   @db.VarChar(20)
  Deadline  DateTime @db.DateTime(0)
  ProjectId Int
  projects  projects @relation(fields: [ProjectId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: "tasks_ibfk_1")

  @@index([ProjectId], map: "ProjectId")
}

model users {
  Id       Int       @id @unique(map: "Id") @default(autoincrement())
  Login    String    @unique(map: "Login") @db.VarChar(45)
  Picture  Bytes     @db.MediumBlob
  Password Bytes     @db.Blob
  Email    String    @unique(map: "Email") @db.VarChar(50)
  Role     String    @db.VarChar(30)
  members  members[]
}

```

### Модуль підключення до бази данних 

```ts
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

```

### Сервіс підключення до бази данних 
```ts
import { Injectable, OnModuleInit  } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit () {
    await this.$connect();
  }
}

```

### Вхідний файл програми 
```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap () {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

### Кореневий модуль програми 

```ts
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

```

### CRUD для проектів 

#### Модуль 

```ts
import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';

@Module({
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [ProjectsService],
})
export class ProjectsModule {}
```

#### Контролер 

```ts
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
```

#### Сервіс

```ts
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
```

#### Репозиторій 

```ts
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
```

#### Пайп для валідації

```ts
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
```

#### DTO(Data Transfer Object) для створення проекту 
```ts
import { IsString } from 'class-validator';

export class CreateProjectDTO {
  @IsString()
    name: string;

  @IsString()
    description: string;

  @IsString()
    status: string;
}
```

#### DTO(Data Transfer Object) для оновлення статусу проекту 
```ts
import { IsString } from 'class-validator';

export class UpdateProjectStatusDTO {
  @IsString()
    status: string;
}
```

### CRUD для прав 

#### Модуль 

```ts
import { Module } from '@nestjs/common';
import { RoleGrantService } from './role-grant.service';
import { RoleGrantController } from './role-grant.controller';

@Module({
  providers: [RoleGrantService],
  controllers: [RoleGrantController],
  exports: [RoleGrantService],
})
export class RoleGrantModule {}
```

#### Контролер 

```ts
import { Controller, Get, Post, Body, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { RoleGrantService } from './role-grant.service';
import { CreateRoleGrantDTO } from '../dtos/CreateRoleGrantDTO';
import { CreateRoleGrantPipe } from '../pipes/CreateRoleGrantPipe';
import { RoleGrantByIdPipe } from '../pipes/RoleGrantByIdPipe';

@Controller('role-grant')
export class RoleGrantController {
  constructor (
    private roleGrantService: RoleGrantService,
  ) {}

  @Get()
  async getRoleGrants () {
    return this.roleGrantService.getAllGrants();
  }

  @Post()
  async createRoleGrant (
    @Body(CreateRoleGrantPipe)body: CreateRoleGrantDTO
  ) {
    return this.roleGrantService.createRoleGrant(body);
  }

  @Delete('/:roleGrantId')
  async deleteRoleGrant (
    @Param('roleGrantId', ParseIntPipe, RoleGrantByIdPipe) roleGrantId: number,
  ) {
    return this.roleGrantService.deleteRoleGrant(roleGrantId);
  }
}
```

#### Сервіс

```ts
import { Injectable } from '@nestjs/common';
import { RoleGrantRepository } from '../database/repositories/RoleGrantRepository';
import { CreateRoleGrantDTO } from '../dtos/CreateRoleGrantDTO';

@Injectable()
export class RoleGrantService {
  constructor (
    private roleGrantRepository: RoleGrantRepository,
  ) {}

  async getAllGrants () {
    return this.roleGrantRepository.findMany({});
  }

  async createRoleGrant (body: CreateRoleGrantDTO) {
    return this.roleGrantRepository.create({
      RoleId: body.roleId,
      PermissionId: body.permissionId,
    });
  }

  async deleteRoleGrant (roleGrantId: number) {
    return this.roleGrantRepository.deleteById(roleGrantId);
  }
}
```

#### Репозиторій 
```ts
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
```
#### Пайп для валідації

```ts
import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { CreateRoleGrantDTO } from '../dtos/CreateRoleGrantDTO';
import { PermissionsRepository } from '../database/repositories/PermissionsRepository';
import { RolesRepository } from '../database/repositories/RolesRepository';

@Injectable()
export class CreateRoleGrantPipe implements PipeTransform {
  constructor (
    private permissionRepository: PermissionsRepository,
    private roleRepository: RolesRepository,
  ) {
  }
  async transform (body: CreateRoleGrantDTO) {
    const permission = await this.permissionRepository.findById(body.permissionId);
    if (!permission) {
      throw new NotFoundException('Permission with such id is not found');
    }

    const role = await this.roleRepository.findById(body.roleId);
    if (!role) {
      throw new NotFoundException('Role with such id is not found');
    }

    return body;
  }
}
```

#### DTO(Data Transfer Object) для створення нового права

```ts
import { IsNumber } from 'class-validator';


export class CreateRoleGrantDTO {
  @IsNumber()
    roleId: number;

  @IsNumber()
    permissionId: number;
}
```
