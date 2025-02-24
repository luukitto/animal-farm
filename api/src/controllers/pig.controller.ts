import { Pig, PigStatus } from "../entities/pig.entity";
import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { PigService } from "../services/pig.service";

@Controller('bidzina')
export class PigController {
    constructor(private pigService: PigService) {}

    @Get('status')
    getCurrentPig(): Promise<Pig> {
        return this.pigService.getPig();
    }

    @Post('status')
    @HttpCode(HttpStatus.OK)
    updateStatus(@Body('status') status: PigStatus): Promise<Pig> {
        return this.pigService.updateStatus(status);
    }
}