import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class newsDTO {
  // @IsOptional()
  // @ApiProperty()
  // walletId: string;

  // @IsOptional()
  // @ApiPropertyOptional()
  // skip: string;

  @IsOptional()
  @ApiPropertyOptional()
  limit: string;
}
