import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pig, PigStatus } from "../entities/pig.entity";

@Injectable()
export class PigService {
    constructor(
        @InjectRepository(Pig)
        private pigRepository: Repository<Pig>,
    ){}

    async getPig(): Promise<Pig> {
        const pig = await this.pigRepository.findOne({ where: {} });
        if (!pig) {
            throw new NotFoundException('Pig not found');
        }
        return pig;
    }

    async updateStatus(status: PigStatus): Promise<Pig> {
        const pig = await this.getPig();
        pig.status = status;
        return this.pigRepository.save(pig);
    }
}