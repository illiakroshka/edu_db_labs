import { IsString } from 'class-validator';

export class UpdateProjectStatusDTO {
  @IsString()
    status: string;
}