import { IsNumber } from 'class-validator';


export class CreateRoleGrantDTO {
  @IsNumber()
    roleId: number;

  @IsNumber()
    permissionId: number;
}