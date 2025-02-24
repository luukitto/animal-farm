import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { PigStatus } from "../entities/pig.entity";

@Controller('music')
export class MusicController {

    @Post('toggle')
    @HttpCode(HttpStatus.OK)
    getMusic(@Body('status') status: PigStatus) {
        const song = status === PigStatus.DEFAULT ? 'pig.m4a' : 'putin.m4a';
        return JSON.stringify(`assets/audio/${song}`);
    }
}