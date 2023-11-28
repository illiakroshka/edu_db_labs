import { IsString } from 'class-validator';

export class CreatePermissionDTO {
  @IsString()
    permission: string;
}