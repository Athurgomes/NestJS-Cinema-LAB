import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({ example: 'Rua das Flores', description: 'Rua/Avenida' })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ example: 123, description: 'Número do endereço' })
  @IsInt()
  @IsNotEmpty()
  number: number;

  @ApiProperty({ example: 'Goiânia', description: 'Cidade' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'GO', description: 'Estado' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: '74000-000', description: 'CEP' })
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @ApiProperty({ example: 'uuid-do-usuario', description: 'ID do usuário associado' })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
