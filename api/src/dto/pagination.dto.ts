import { IsOptional, IsInt, Min, IsString, Max, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { SortField, SortOrder } from "./sort.enum";

export class PaginationDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(10)
    limit?: number = 10;

    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsEnum(SortField)
    sortBy?: SortField;

    @IsOptional()
    @IsEnum(SortOrder)
    sortOrder?: SortOrder;
}