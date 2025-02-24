import { Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { AnimalService } from "../services/animal.service";
import { Animal } from "../entities/animal.entity";
import { PaginationDto } from "../dto/pagination.dto";
import { PaginatedResponse } from "../dto/paginated-response.dto";

@Controller('animals')
export class AnimalController {
    constructor(private animalService: AnimalService) {
    }

    @Get()
    getAllAnimals(@Query() paginationDto: PaginationDto): Promise<PaginatedResponse<Animal>> {
        return this.animalService.getAllAnimals(paginationDto);

    }

    @Post(':id/feed')
    @HttpCode(HttpStatus.OK)
    feedAnimal(@Param('id') id: number) {
        return this.animalService.feedAnimal(id);
    }
}
