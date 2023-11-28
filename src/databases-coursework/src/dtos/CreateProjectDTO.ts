import { IsString } from 'class-validator';

export class CreateProjectDTO {
  @IsString()
    name: string;

  @IsString()
    description: string;

  @IsString()
    status: string;
}